using System.Net.Http;
using MvcApp.Models;
using System.Collections.Generic;

namespace MvcApp.Controllers
{
    public class UserAPIController : BaseAPIController
    {      
        public HttpResponseMessage GetData()
        {
            List<data> people = new List<data>{
                   new data{ TerritoryCode = 1, WarehouseCode = "Scott"},
                   new data{TerritoryCode = 2, WarehouseCode = "Bill"}
                   };
            return ToJson(people);
        }

    }
}