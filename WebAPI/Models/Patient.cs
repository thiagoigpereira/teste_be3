namespace WebAPI.Models
{
    public class Patient
    {
       public int Id { get; set; }
       public string FirstName { get; set; }
       public string LastName { get; set; }
       public string BirthDate { get; set; }
       public string Gender { get; set; }
       public int CPF { get; set; }
       public int RG { get; set; }
       public string UFRG { get; set; }
       public string Email { get; set; }
       public string CellPhoneNumber { get; set; }
       public string PhoneNumber { get; set; }
       public string HealthInsurance { get; set; }
       public int HealthInsuranceCard { get; set; }
       public string HealthInsuranceCardVal { get; set; }
    }
}
