using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Models.Context;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [AllowAnonymous]
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
        [Authorize]
        public async Task<ActionResult<IEnumerable<Transactions>>> Get([FromBody] Transactions transaction)
        {
            var values = await _context.Transactions.ToListAsync();
            List<Transactions> filteredValues = new List<Transactions>();
            foreach (var val in values)
            {
                if (val.userID == transaction.userID)
                {
                    filteredValues.Add(val);
                }
            }
            return Ok(filteredValues);
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
        // public async void Post([FromBody] Transactions transaction)
        public async Task<ActionResult<Transactions>> Post([FromBody] Transactions transaction)
        {
            transaction.Date = System.DateTime.Now;
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return Ok(transaction);
        }

        // PUT api/transactions/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Transactions>> Put(int id, [FromBody] Transactions transaction)
        //public async void Put(DateTime dateTime, Boolean foodWaste, Boolean pickUp, int amountlbs, string status, Boolean flag)
        {
            /* var transaction = new Transactions
            {
                Date = System.DateTime.Now,
                FoodWaste = foodWaste,
                Pickup = pickUp,
                Amountlbs = amountlbs,
                Status = status,
                Flag = flag
            }; */
            var tr = await _context.Transactions.FindAsync(id);
            //tr.Date = System.DateTime.Now;
            tr.FoodWaste = transaction.FoodWaste;
            tr.Pickup = transaction.Pickup;
            tr.Amountlbs = transaction.Amountlbs;
            tr.Status = transaction.Status;
            tr.Flag = transaction.Flag;
            tr.userID = transaction.userID;

            //_context.Add(transaction);
            await _context.SaveChangesAsync();
            return Ok(tr);
        }

        // DELETE api/transactions/5
        [HttpDelete("{id}")]
        //public async void Delete(int id)
        public async Task<ActionResult<Transactions>> Delete(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
