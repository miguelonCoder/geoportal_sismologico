import { ILogicOperatorsCriteria } from "../domain/repositories/criteria-logic-operators.abstract";
import { ICriteria } from "../domain/repositories/criteria.abstract";

class DateCriteria implements ICriteria {
  private startDate: Date
  constructor(start: Date) {
    this.startDate = start
  }

  toQueryString(): string {
    return `starttime=${this.startDate.toString()}`
  }
}

class LogicOperator extends ILogicOperatorsCriteria {
  static override andCriteria(criteria: ICriteria, nextCriteria: ICriteria): ICriteria {
    return {
      toQueryString(): string {
        const queryString1 = criteria.toQueryString();
        const queryString2 = nextCriteria.toQueryString();
        return queryString1 && queryString2 ? `${queryString1}&${queryString2}` : '';
      }
    }
  }
}

class Date2Criteria implements ICriteria {
  private startDate: Date
  constructor(start: Date) {
    this.startDate = start
  }

  toQueryString(): string {
    return `endtime=${this.startDate.toString()}`
  }
}

function bootstrap() {

  const criteriaArray: ICriteria[] = [
    new DateCriteria(new Date(Date.now())),
    new Date2Criteria(new Date(Date.now()))
  ]
  const combined2 = criteriaArray.reduce((previus, current) => LogicOperator.andCriteria(previus, current))
  console.log(combined2.toQueryString())
}

bootstrap()

