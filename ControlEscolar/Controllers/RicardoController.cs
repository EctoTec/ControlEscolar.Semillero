using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlEscolar.Controllers
{
    public class RicardoController : Controller
    {
        // GET: Ricardo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Profesores()
        {
            ViewBag.Title = "Profesores";
            return View();
        }
    }
}