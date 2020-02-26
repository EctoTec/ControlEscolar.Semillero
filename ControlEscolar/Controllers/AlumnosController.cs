using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;

namespace ControlEscolar.Controllers
{
    public class AlumnosController : Controller
    {
        // GET: Alumnos
        public ActionResult Index()
        {
            ViewBag.Title = "Alumnos";
            return View();
        }

        /*public ActionResult Alumno()
        {
            List<Alumno> alumnos = new List<Alumno>();
            using(CursoEscolarEntities con = new CursoEscolarEntities())
            {

            }
        }*/
    }
}