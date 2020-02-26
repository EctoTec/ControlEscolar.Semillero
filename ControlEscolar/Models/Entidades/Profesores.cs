using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class Profesores
    {
        public int Prf_id { get; set; }
        public string Prf_Nombre { get; set; }
        public string Prf_Apellido { get; set; }
        public int Prf_Area { get; set; }
    }
    public class Area
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
    }
    public class Grupo
    {
        public int Id { get; set; }
        public int Nombre { get; set; }
        public int Profesor { get; set; }
        public string Turno { get; set; }
    }
}