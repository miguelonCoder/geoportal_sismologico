import { ICriteria } from "./criteria.abstract";

export abstract class ILogicOperatorsCriteria {
  static andCriteria(criteria: ICriteria, nextCriteria: ICriteria): ICriteria {
    return {
      toQueryString(): string{
        const queryString1 = criteria.toQueryString();
        const queryString2 = nextCriteria.toQueryString();
        return queryString1 && queryString2 ? `${queryString1}&${queryString2}` : '';
      },
    };
  }

  static orCriteria(criteria: ICriteria, nextCriteria: ICriteria): ICriteria {
    return {
      toQueryString(): string{
        const queryString1 = criteria.toQueryString();
        const queryString2 = nextCriteria.toQueryString();
        return queryString1 && queryString2 ? `${queryString1}&${queryString2}` : '';
      },
    };
  }
}