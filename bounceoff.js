function bounceoff(a1, a2)
{
  if(a2.x - a1.x < (a2.width/2 + a1.width/2) && a1.x - a2.x < (a1.width/2 + a2.width/2) && a2.y - a1.y < (a2.height/2 + a1.height/2) && a1.y - a2.y < (a1.height/2 + a2.height/2))
  {
      return true;
  }
  else{
      return false;
  }
}