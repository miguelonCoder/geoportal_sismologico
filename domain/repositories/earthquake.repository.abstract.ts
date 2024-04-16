import { Earthquake } from '../entities/earthquake.entity';
import { Report } from "../entities/report.entity";
import { ICriteria } from "./criteria.abstract";

export abstract class IEarthquakeRepository {

  abstract search(criteria: ICriteria): Promise<Earthquake[]> 

  abstract getEarthquakeReports(idEarthquake: string): Promise<Report[]> 

  abstract addReport(idEarthquake: string, report: Report): Promise<Report> 

  abstract updateReport(idReport: string, report: Partial<Report>): Promise<Report> 

  abstract deleteReport(idReport: string ): Promise<Report> 

}