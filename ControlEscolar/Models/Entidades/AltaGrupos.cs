using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class d_Grupos
    {
        public int Id { get; set; }
        public int Materia { get; set; }
        public int Profesor { get; set; }
        public String Turno { get; set; }
    }

    public class d_Profesores
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Area { get; set; }
    }
}