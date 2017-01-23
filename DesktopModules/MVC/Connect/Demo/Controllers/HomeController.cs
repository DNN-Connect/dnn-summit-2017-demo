using System.Web.Mvc;
using Connect.DNN.Modules.Demo.Common;

namespace Connect.DNN.Modules.Demo.Controllers
{
    public class HomeController: DemoMvcController
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View(DemoModuleContext.Settings.View);
        }
    }
}
