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
}