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
        public async Task<ActionResult<IEnumerable<Transactions>>> Get(Guid user_id)
        {
            var values = await _context.Transactions.ToListAsync();
            List<Transactions> filteredValues = new List<Transactions>();
            foreach (var val in values)
            {
                if (val.userID == user_id)
                {
                    filteredValues.Add(val);
                }
            }
            return Ok(filteredValues);
        }

        // GET api/transactions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transactions>> GetAll(int id, Guid user_id)
        {
            var value = await _context.Transactions.FindAsync(id);
            if (value.userID == user_id)
            {
                return Ok(value);
            }
            else
            {
                return Ok();
            }
        }

        // POST api/transactions
        [HttpPost]
        // public async void Post([FromBody] Transactions transaction)
        public async Task<ActionResult<Transactions>> Post(Guid user_id, [FromBody] Transactions transaction)
        {
            if (transaction.userID == user_id)
            {
                transaction.Date = System.DateTime.Now;
                _context.Transactions.Add(transaction);
                await _context.SaveChangesAsync();
                return Ok(transaction);
            }
            return Ok();
        }

        // PUT api/transactions/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Transactions>> Put(int id, Guid user_id, [FromBody] Transactions transaction)
        //public async void Put(DateTime dateTime, Boolean foodWaste, Boolean pickUp, int amountlbs, string status, Boolean flag)
        {
            var value = await _context.Transactions.FindAsync(id);
            //tr.Date = System.DateTime.Now;
            if (value.userID == user_id)
            {
                value.FoodWaste = transaction.FoodWaste;
                value.Pickup = transaction.Pickup;
                value.Amountlbs = transaction.Amountlbs;
                value.Status = transaction.Status;
                value.Flag = transaction.Flag;
                value.userID = transaction.userID;
                await _context.SaveChangesAsync();
                return Ok(value);
            }
            return Ok();
        }

        // DELETE api/transactions/5
        [HttpDelete("{id}")]
        //public async void Delete(int id)
        public async Task<ActionResult<Transactions>> Delete(int id, Guid user_id)
        {
            var value = await _context.Transactions.FindAsync(id);
            if (value.userID == user_id)
            {
                _context.Transactions.Remove(value);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }
    }
}
