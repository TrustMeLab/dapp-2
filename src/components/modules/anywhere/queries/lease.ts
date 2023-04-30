import {processRequest} from "@components/modules/anywhere/utils/graphql";

export const getLeaseDetailsById = (id: string): Promise<any> => {
  const query = `
    {
      leases(where: {id: "${id}"}) {
        id
        rentAmount
        totalNumberOfRents
        currencyPair
        ownerReviewUri
        tenantReviewUri
        paymentToken
        rentPaymentInterval
        startDate
        status
        uri
        updatedAt
        cancelledByOwner
        cancelledByTenant
        createdAt
        owner {
          id
          handle
          updatedAt
        }
        tenant {
          handle
          id
          updatedAt
        }
       rentPayments(orderBy: rentPaymentDate) {
        id
        amount
        paymentToken
        validationDate
        rentPaymentDate
        exchangeRate
        exchangeRateTimestamp
        withoutIssues
        status
      }
    }
  }
  `;
  return processRequest(query);
};

export const getLeasesByTenantId = (id: string): Promise<any> => {
  const query = `
    {
        leases(where: {tenant_: {id: "${id}"}}) {
          id
          status
          rentPaymentInterval
          totalNumberOfRents
          rentAmount
          currencyPair
          paymentToken
          tenantReviewUri
          ownerReviewUri
          startDate
          cancelledByOwner
          cancelledByTenant
          tenant {
            id
            handle
          }
          owner {
            handle
            }
          }
  }
  `;
  return processRequest(query);
};

export const getLeasesIdsByTenantId = (id: string): Promise<any> => {
  const query = `
  {
  leases(where: {tenant_: {id: "${id}"}}) {
    id
  }
}
  `;
  return processRequest(query);
};

export const getLeasesIdsByOwnerId = (id: string): Promise<any> => {
  const query = `
  {
  leases(where: {owner_: {id: "${id}"}}) {
    id
  }
}
  `;
  return processRequest(query);
};

export const getUserInfosReview = (id: string): Promise<any> => {
  const query = `
  {
    users(where: {id: "${id}"}) {
      id
      address
      handle
      hasLease
      uri
      createdAt
      leases(where: {status: ENDED}) {
        id
        tenantReviewUri
        uri
        owner {
          id
          handle
        }
      }
    }
  }`;
  return processRequest(query);
};

export const getLeasesByOwnerId = (id: string): Promise<any> => {
  const query = `
  {
    leases(where: {owner_: {id: "${id}"}}) {
      id
      currencyPair
      ownerReviewUri
      status
      paymentToken
      rentAmount
      rentPaymentInterval
      rentPaymentLimitTime
      startDate
      tenantReviewUri
      totalNumberOfRents
      updatedAt
      uri
      createdAt
      cancelledByTenant
      cancelledByOwner
      owner {
        handle
      }
      tenant {
        handle
      }
    }
}
  `;
  return processRequest(query);
};
