using System;
namespace Server.Models
{
    public class Transactions
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public Boolean FoodWaste { get; set; }
        public Boolean Pickup { get; set; }
        public int Amountlbs { get; set; }
        public string Status { get; set; }
        public Boolean Flag { get; set; }
    }
}
