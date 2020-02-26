using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class Alumnos
    {
        public int Al_Id { get; set; }
        public string Al_Nombre { get; set; }
        public string Al_Apellido { get; set; }
        public int Al_Carrera_Id { get; set; }
        public int Al_Semestre { get; set; }
    }
}