using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class c_Profesores
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Area { get; set; }
    }

    public class tab_Profesores
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Area { get; set; }
        public int Area_Id { get; set; }
    }

    public class c_AreaP
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