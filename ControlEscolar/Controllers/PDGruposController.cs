using ControlEscolar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlEscolar.Controllers
{
    public class PDGruposController : Controller
    {
        // GET: PDGrupos
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DelGrupo(int id)
        {
            using(var contexto = new CursoEscolarEntities())
            { 
                var objGrupo = (from Grupo in contexto.Grupo
                                where Grupo.Grp_Id == id
                                select Grupo).FirstOrDefault();
                contexto.Grupo.Remove(objGrupo);
                contexto.SaveChanges();

                return RedirectToAction("Home", "Grupos");

            }
        }

    }
}