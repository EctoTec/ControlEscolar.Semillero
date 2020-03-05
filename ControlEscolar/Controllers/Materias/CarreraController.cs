using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;

namespace ControlEscolar.Controllers.Materias
{
    public class CarreraController : ApiController
    {
        // GET: api/Carrera
        public C_Carrera[] Get()
        {
            List<C_Carrera> LCarrera = new List<C_Carrera>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach (Carrera item in contexto.Carrera)
                {
                    LCarrera.Add(new C_Carrera()
                    {
                        Id = item.Car_Id,
                        Nombre = item.Car_Nombre,
                        Nivel = item.Car_Nivel
                    });
                }
            }
            return LCarrera.ToArray();
        }

        // GET: api/Carrera/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Carrera
        public bool Post(C_Carrera carrera)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Carrera carrera1 = new Carrera { Car_Nombre = carrera.Nombre, Car_Nivel = carrera.Nivel };
                contexto.Carrera.Add(carrera1);
                contexto.SaveChanges();
                guardar = true;
            }
            return guardar;
        }

        // PUT: api/Carrera/5
        public bool Put(int id, C_Carrera carrera)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                if (contexto.Carrera.Count() > 0)
                {
                    Carrera carrera1 = contexto.Carrera.Where(e => e.Car_Id == id).FirstOrDefault();
                    if (carrera1 != null)
                    {
                        carrera1.Car_Nivel = carrera.Nivel;
                        carrera1.Car_Nombre = carrera.Nombre;
                        contexto.SaveChanges();
                        guardar = true;
                    }
                }
            }
            return guardar;
        }

        // DELETE: api/Carrera/5
        public bool Delete(int id)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Carrera carrera = contexto.Carrera.Where(e => e.Car_Id == id).FirstOrDefault();
                contexto.Carrera.Remove(carrera);
                contexto.SaveChanges();
            }
            return guardar;
        }
    }
}
