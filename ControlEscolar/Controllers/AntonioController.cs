using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlEscolar.Controllers
{
    public class AntonioController : Controller
    {
        // GET: Antonio
        public ActionResult Index()
        {
            return View();
        }
        [Route("Materia")]
        public ActionResult Materia()
        {
            return View();
        }
    }
}