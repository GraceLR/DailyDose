using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
    public class GraduatedSteps
    {
        public static string GraduatedValue(long value, int decimalPlaces, bool addDecimalForSingleDigit)
        {
            var graduatedSteps = new Dictionary<int, string>()
        {
            { 15, "Q" },
            { 12, "T" },
            { 9 , "B" },
            { 6 , "M" },
            { 3 , "T" },
            { 0 , ""  }
        };

            if (decimalPlaces < 0)
            {
                throw new Exception("Decimal places cannot be negative.");
            }

            decimal graduatedValue = value;
            int step = 0;
            for (; step <= 15; step += 3)
            {
                var possibleValue = value / (decimal)Math.Pow(10, step);

                if (Math.Abs(possibleValue) >= 1)
                {
                    graduatedValue = possibleValue;
                }
                else
                {
                    break;
                }
            }

            step -= 3;

            if (Math.Abs(graduatedValue) < 10 && addDecimalForSingleDigit)
            {
                decimalPlaces++;
            }

            return Math.Round(graduatedValue, decimalPlaces).ToString() + graduatedSteps[step];
        }
    }
}
