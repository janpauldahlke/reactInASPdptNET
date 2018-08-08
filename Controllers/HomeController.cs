using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace react_app.Controllers
{
  public class HomeController : Controller
  {
    // GET: Home
    public ActionResult Index()
    {
      return View();
    }

    public JsonResult getUsers(){
      List<string> arr =new List<string>();
      arr.Add("sadfas");
      arr.Add("fsadfas");
      return Json(arr, JsonRequestBehavior.AllowGet);

    }


    public JsonResult getPeople(int id)
    {
      List<string> arr = new List<string>();
      arr.Add("sadfas");
      arr.Add("fsadfas");
      arr.Add(id.ToString());
      return Json(arr, JsonRequestBehavior.AllowGet);
      }
    }
  }