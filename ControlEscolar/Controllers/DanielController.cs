using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlEscolar.Controllers
{
    public class DanielController : Controller
    {
        // GET: Daniel
        public ActionResult Index()
        {
            List<C_Materia> lst;
            using (CursoEscolarEntities db = new CursoEscolarEntities())
            {
                lst = (from d in db.Materia
                       select new C_Materia
                       {
                           Id = d.Mat_Id,
                           Nombre = d.Mat_Nombre
                       }).ToList();
            }
            return View(lst);
        }

        public ActionResult Inscribir()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Inscribir(C_Materia model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CursoEscolarEntities ControlEscolar = new CursoEscolarEntities())
                    {
                        var oLista = new Materia();
                        oLista.Mat_Id = model.Id;
                        oLista.Mat_Nombre = model.Nombre;
                    }
                }
                return ViewBag.model = model;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

    }   
}