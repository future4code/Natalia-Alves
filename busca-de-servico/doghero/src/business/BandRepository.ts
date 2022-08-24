import { band, Band } from "../model/Band";

export interface BandRepository{
    createBand(band: band): Promise<void>
    getBandById(id: string): Promise<Band>
}