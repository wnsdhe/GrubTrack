using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Models.Context;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class TransactionsController : Controller
    {
        private readonly DataContext _context;
        public TransactionsController(DataContext context)
        {
            _context = context;
        }


        // GET: api/transactions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transactions>>> Get()
        {
            var values = await _context.Transactions.ToListAsync();
            return Ok(values);
        }

        // GET api/transactions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transactions>> Get(int id)
        {
            var value = await _context.Transactions.FindAsync(id);
            return Ok(value);
        }

        // POST api/transactions
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/transactions/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/transactions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
