using DotNetNuke.Web.Mvc.Framework.Controllers;
using DotNetNuke.Web.Mvc.Routing;
using System.Web.Mvc;
using System.Web.Routing;

namespace Connect.DNN.Modules.Demo.Common
{
    public class DemoMvcController : DnnController
    {

        private ContextHelper _demoModuleContext;
        public ContextHelper DemoModuleContext
        {
            get { return _demoModuleContext ?? (_demoModuleContext = new ContextHelper(this)); }
        }

    }
}