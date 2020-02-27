using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class c_Materia
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public int Carrera { get; set; }
        public int Area { get; set; }
    }

    public class t_Materia
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Carrera { get; set; }
        public String Nivel { get; set; }
        public String Area { get; set; }

    }
    public class c_Area
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
    }
    public class c_Carrera
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Nivel { get; set; }
    }
}