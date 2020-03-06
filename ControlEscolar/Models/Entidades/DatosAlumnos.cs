using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class c_DatosAlumnos
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Apellidos { get; set; }
        public int Carrera { get; set; }
        public Nullable<int> Semestres { get; set; }
    }
    public class tab_DatosAlumnos
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Apellidos { get; set; }
        public String Carrera { get; set; }
        public int Carrera_Id { get; set; }
        public Nullable<int> Semestres { get; set; }
    }
}