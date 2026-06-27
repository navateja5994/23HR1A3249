const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXZhdGVqYXI4MEBnbWFpbC5jb20iLCJleHAiOjE3ODI1NDQ2ODgsImlhdCI6MTc4MjU0Mzc4OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImViYzQ5OGE3LTEwZjctNDc5OC04MTNhLTcxODI0YjdhNDdiZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hbGxhcGFyZWRkeSBuYXZhdGVqYXJlZGR5Iiwic3ViIjoiZGNlNWM3OTUtYTdmNy00NWNiLTg0M2ItZGZmMTAyMGM3NDE5In0sImVtYWlsIjoibmF2YXRlamFyODBAZ21haWwuY29tIiwibmFtZSI6Im5hbGxhcGFyZWRkeSBuYXZhdGVqYXJlZGR5Iiwicm9sbE5vIjoiMjNocjFhMzI0OSIsImFjY2Vzc0NvZGUiOiJhVGt5YnMiLCJjbGllbnRJRCI6ImRjZTVjNzk1LWE3ZjctNDVjYi04NDNiLWRmZjEwMjBjNzQxOSIsImNsaWVudFNlY3JldCI6IlFTelZiZGNGZ1ZSanZmYXIifQ.BvvqKUwlinmAnmD1HDGmPw1dkLu8RDxvARjtSO3gVgM";

async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message
        })
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default Log;
