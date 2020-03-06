using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.ViewModel
{
    public class InscripcionModel
    {
        public int IdAlumno { get; set; }
        public int IdMateria { get; set; }
        public String NombreMateria { get; set; }
        public int IdCarrera { get; set; }
        public Nullable<int> IdGpo { get; set; }
        public String NombreCarr { get; set; }
        public String NombreAlumno { get; set; }
        public int IdInscripcion { get; set; }
    }

    public class AlumnoGpoModel
    {
        public Alumno Alumno { get; set; }
        public Grupo Grupo { get; set; }
        public int Inscripcion { get; set; }
    }
}