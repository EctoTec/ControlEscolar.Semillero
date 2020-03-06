using ControlEscolar.Models;
using ControlEscolar.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ControlEscolar.Controllers.Inscripciones
{
    public class InscripcionApiController : ApiController
    {
        // GET: api/InscripcionApi
        public List<InscripcionModel> Get()
        {
            using(CursoEscolarEntities db = new CursoEscolarEntities())
            {
                List<InscripcionModel> query = db.Alumno
                    .Join(db.Carrera,
                        alumCar => alumCar.Al_Carrera_Id,
                        carrId => carrId.Car_Id,
                        (alumCarr, carrId) => new { Alumno = alumCarr, Carrera = carrId })

                    .Join(db.Inscripcion,
                        idAl => idAl.Alumno.Al_Id,
                        idIns => idIns.Ins_Alumno_Id,
                        (idAl, idIns)=>new { Inscripcion = idIns, Alumno = idAl})

                    .Join(db.Materia,
                        matCarr => matCarr.Alumno.Carrera.Car_Id,
                        carrMat => carrMat.Mat_Carrera_Id,
                        (matCarr, carrMat) => new { Materia = matCarr, Carrera = carrMat })
                    .Select(x => new InscripcionModel { NombreMateria = x.Carrera.Mat_Nombre, NombreCarr = x.Carrera.Carrera.Car_Nombre,
                        IdAlumno = x.Materia.Alumno.Alumno.Al_Id, IdGpo = x.Materia.Inscripcion.Ins_Grupo_Id, IdCarrera=x.Carrera.Carrera.Car_Id,
                        NombreAlumno=(x.Materia.Alumno.Alumno.Al_Nombre + " " + x.Materia.Alumno.Alumno.Al_Apellido),
                        IdInscripcion=x.Materia.Inscripcion.Ins_Id, IdMateria=x.Carrera.Mat_Id})
                    .ToList();

                return query;
            }
        }

        // GET: api/InscripcionApi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/InscripcionApi
        public bool Post(InscripcionModel apiInsc)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities db = new CursoEscolarEntities())
            {

                Inscripcion grupodb = new Inscripcion
                {
                    Ins_Grupo_Id = apiInsc.IdGpo,
                    Ins_Alumno_Id = apiInsc.IdAlumno
                };
                db.Inscripcion.Add(grupodb);
                db.SaveChanges();
                guardar = true;
            }

            return guardar;
        }

        // PUT: api/InscripcionApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/InscripcionApi/5
        public void Delete(int id)
        {
        }
    }
}
