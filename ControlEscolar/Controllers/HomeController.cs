﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;

namespace ControlEscolar.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        
        public ActionResult Grupos()
        {
            List<Grupos> Grupos = new List<Grupos>();

            
            return View();
        }
    }
}
