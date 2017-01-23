using DotNetNuke.Web.Api;
using System.Net;
using System.Net.Http;

namespace Connect.DNN.Modules.Demo.Common
{
    public class DemoApiController : DnnApiController
    {
        private ContextHelper _demoModuleContext;
        public ContextHelper DemoModuleContext
        {
            get { return _demoModuleContext ?? (_demoModuleContext = new ContextHelper(this)); }
        }

        public HttpResponseMessage ServiceError(string message) {
            return Request.CreateResponse(HttpStatusCode.InternalServerError, message);
        }

        public HttpResponseMessage AccessViolation(string message)
        {
            return Request.CreateResponse(HttpStatusCode.Unauthorized, message);
        }

    }
}