// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello (req, res) :void {
  console.log("\n=========================")
  console.log("Method=>",req.method)
  console.log("Body=>",req.body)
  res.statusCode = 200  
  res.json({ name: 'Padre Cícero Romão Batista' })
  }
