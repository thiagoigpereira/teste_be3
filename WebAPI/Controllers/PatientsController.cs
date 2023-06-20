using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PatientsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatient()
        {
          if (_context.Patient == null)
          {

              return NotFound();
          }
            return await _context.Patient.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
          if (_context.Patient == null)
          {
              return NotFound();
          }
            var patient = await _context.Patient.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(int id, Patient patient)
        {
            if (id != patient.Id)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> PostPatient(Patient patient)
        {
          if (_context.Patient == null)
          {
              return Problem("Entity set 'WebAPIContext.Patient'  is null.");
          }
            _context.Patient.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatient", new { id = patient.Id }, patient);
        }

        private bool PatientExists(int id)
        {
            return (_context.Patient?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
