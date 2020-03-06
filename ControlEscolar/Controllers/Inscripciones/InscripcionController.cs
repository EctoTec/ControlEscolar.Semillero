using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ControlEscolar.Controllers.Inscripciones
{
    public class InscripcionController : Controller
    {
        // GET: Inscripcion
        CursoEscolarEntities db = new CursoEscolarEntities();
        public ActionResult ConsultarMaterias(int id)
        {
            List<C_Materia> query = db.Alumno
            .Join(db.Carrera,
                alumno => alumno.Al_Carrera_Id,
                carrera => carrera.Car_Id,
                (alumno, carrera) => new { Alumno = alumno, Carrera = carrera })

            .Join(db.Materia,
                mat => mat.Carrera.Car_Id,
                carr => carr.Mat_Carrera_Id,
                (mat, carr) => new { Materia = mat, Carrera = carr })
            .Where(postAndMeta => postAndMeta.Materia.Alumno.Al_Id == id).Select(x => new C_Materia { Nombre = x.Carrera.Mat_Nombre, Id=x.Carrera.Mat_Id })
            .ToList();
            return View(query);
        } 
        
        public ActionResult ConsultarGrupos(int id)
        {
            List<Models.Grupo> query = db.Grupo.Where(x => x.Grp_Materia_Id == id).ToList();
            
            return View(query);

        }

        public ActionResult AlumnosGpo()
        {
            //List<InscripcionModel> query = db.Alumno
            //    .Join(db.Carrera,
            //        alumCar => alumCar.Al_Carrera_Id,
            //        carrId => carrId.Car_Id,
            //        (alumCarr, carrId) => new { Alumno = alumCarr, Carrera = carrId })

            //    .Join(db.Materia,
            //        matCarr => matCarr.Carrera.Car_Id,
            //        carrMat => carrMat.Mat_Carrera_Id,
            //        (matCarr, carrMat) => new { Materia = matCarr, Carrera = carrMat })
            //    .Select(x => new InscripcionModel { NombreMateria = x.Carrera.Mat_Nombre, NombreCarr = x.Materia.Carrera.Car_Nombre })
            //    .ToList();

            List<Carrera> cCarrera = db.Carrera.ToList();
            ViewBag.Carrera = cCarrera;

            List<Materia> cMateria = db.Materia.ToList();
            ViewBag.Materia = cMateria;
            
            List<Models.Grupo> cGrupo = db.Grupo.ToList();
            ViewBag.Grupo = cGrupo;



            return View();
        }
    }
}