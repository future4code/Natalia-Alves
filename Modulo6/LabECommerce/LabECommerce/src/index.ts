import express, { Request, Response } from "express";
import app from "./app";
import { v4 as generateId } from 'uuid';
import connection from "./connection";

//Endpoint criar usuário
app.post ("/user", async (req: Request, res: Response): Promise<void> =>{
    try{
      const id = generateId(); 
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
  
      if (name == "" || password == "" || email == ""){
        res.status(400).send({ message: "Por favor preencha os dados"})
      }else{
        await connection ("labecommerce_users").insert({
            id,
            name,
            email,
            password
        })
      }
          res.status(200).send({ message: "Usuário criado" });
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
     }
});
  
//Endpoint pegar todos os usuários
app.get("/user/all", async(req: Request, res: Response): Promise<void> =>{
    try{
      const result = await connection("labecommerce_users")
      res.status(200).send(result);
    }catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
  }
})

//Endpoint criar produtos
app.post ("/products", async (req: Request, res: Response): Promise<void> =>{
    try{
      const id = generateId(); 
      const name = req.body.name;
      const price = req.body.price;
      const image_url = req.body.imageUrl;
  
      if (name == "" || price == "" || image_url == ""){
        res.status(400).send({ message: "Por favor preencha os dados"})
      }else{
        await connection ("labecommerce_products").insert({
            id,
            name,
            price,
            image_url
        })
      }
          res.status(200).send({ message: "Produto cadastrado" });
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
     }
});

//Endpoint pegar todos os produtos
app.get("/products/all", async(req: Request, res: Response): Promise<void> =>{
    try{
        const result = await connection("labecommerce_products")
        res.status(200).send(result);
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
})

//Endpoint registrar compra
app.post ("/purchases", async (req: Request, res: Response): Promise<void> =>{
    try{
      const id = generateId(); 
      const user_id = req.body.userId;
      const product_id = req.body.productId;
      const quantity = req.body.quantity;

      let product = await connection ("labecommerce_products")
      .select("labecommerce_products.price")
      .where({"labecommerce_products.id": product_id})

      if (product.length === 0){
        throw new Error("Id não encontrado")
      }

      let total_price = quantity * (product[0].price);
      
  
      if (user_id == "" || product_id == "" || quantity == ""){
        res.status(400).send({ message: "Por favor preencha os dados"})
      }else{
        await connection ("labecommerce_purchases").insert({
            id,
            user_id,
            product_id,
            quantity,
            total_price
        })
      }
          res.status(200).send({ message: "Compra realizada! Volte sempre!" });
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
     }
});


app.get("/users/:user_id/purchases", async(req: Request, res: Response): Promise<void> =>{
    try{
        const purchaseID = req.params.user_id
        const result = await connection("labecommerce_purchases")
        .innerJoin(
            "labecommerce_users",
            "labecommerce_purchases.user_id",
            "labecommerce_users.id",
        )
        .select("labecommerce_users.name","labecommerce_purchases.quantity", "labecommerce_purchases.total_price")
        .where({"labecommerce_purchases.user_id": purchaseID})
    
        if (result.length === 0){
          throw new Error("Id não encontrado")
        }
    
        res.status(200).send(result);
      }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
})