using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlEscolar.Controllers.Inscripciones
{
    public class InscripcionController : Controller
    {
        // GET: Inscripcion
        CursoEscolarEntities db = new CursoEscolarEntities();
        public ActionResult ConsultarMaterias(int id)
        {
            List<t_Materia> query = db.Alumno
            .Join(db.Carrera,
                alumno => alumno.Al_Carrera_Id,
                carrera => carrera.Car_Id,
                (alumno, carrera) => new { Alumno = alumno, Carrera = carrera })

            .Join(db.Materia,
                mat => mat.Carrera.Car_Id,
                carr => carr.Mat_Carrera_Id,
                (mat, carr) => new { Materia = mat, Carrera = carr })
            .Where(postAndMeta => postAndMeta.Materia.Alumno.Al_Id == id).Select(x => new t_Materia { Nombre = x.Carrera.Mat_Nombre, Id=x.Carrera.Mat_Area_Id })
            .ToList();
            return View(query);

        } 
        
        public ActionResult ConsultarGrupos(int id)
        {
            List<Models.Grupo> query = db.Grupo.Where(x => x.Grp_Materia_Id == id).ToList();
            
            return View(query);

        }

        
    }
}