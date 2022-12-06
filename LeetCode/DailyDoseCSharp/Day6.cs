using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class Day6
	{
		public static int Q1()
		{
			string input = rawInput;
			int count = 0;
			var map = new Dictionary<char, int>();
			for (var i = 0; i < input.Length; i++)
			{
				char character = input[i];
				if (map.ContainsKey(character))
				{
					var pos = map[character] + 1;
					map.Clear();
					count = 1;
					for (var j = pos; j < i; j++)
					{
						map.Add(input[j], j);
						count++;
					}
				}
				else
				{
					count++;
					if (count == 4)
					{
						return i + 1;
					}
				}
				map.Add(character, i);
			}
			return 0;
		}


		public static int Q2()
		{
			string input = rawInput;
			int count = 0;
			var map = new Dictionary<char, int>();
			for (var i = 0; i < input.Length; i++)
			{
				char character = input[i];
				if (map.ContainsKey(character))
				{
					var pos = map[character] + 1;
					map.Clear();
					count = 1;
					for (var j = pos; j < i; j++)
					{
						map.Add(input[j], j);
						count++;
					}
				}
				else
				{
					count++;
					if (count == 14)
					{
						return i + 1;
					}
				}
				map.Add(character, i);
			}
			return 0;
		}
		static string testInput = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
		static string rawInput = @"vmsvstvtzvzqvzvssvddsgdddrqrsqqwnnffrwrswwztwzzbssgtstvsshrsrrlvrvzrrsqsvqsqbssqrsrjrsrddqnnfqnnrfnrnffjsjnnqddjjbvvbzzshhsffmtftrrpzznlltclltmltmllzclcwwgzzzqvqhqllcrllqdqpqnqbqggcrcsclssrfsssqhhfzzprrjvrjvvblvbllwccztzggspgggqrqcqjcqjcqcmmffmtmltlwwcpplpqqwhwvhvnnqhqsqlqvvgfgqqddlhhstthzhgzgbzbdzbzlzwlzlpljlgjjqlltrrbmrrvvcttsddfjddmbdbffcrfftvvzppncpcvcdvcvvjjjlttcgtcctrrrgmrgmgwwsgscsffswfwqwnnzmzffpwptpntppbddggsbsddmjmssnzsnstsztttjztjjpddwlwrrlnnzsnnfllqrrqmqhhfddtmmpfmfcfgfllngnvnjjmffwbffsqsmsdstdddjssmlssfpprrgzzzwvvftffczfftccwrrdsrsjrssfnsnttqptqtnqtnqtttjqtjqjzjpzpvzvbzvvjqqvcqcwwgwllbwbjjhsjhhchffgdfgffvddrndrdwdwlwqqfqzzntzzhwzzndnjnsjjmvvlqqqqshhmzzjvvcscqqjjhphnppcprrhnnbsspcscbssnsmmznzsnnszsrzrwrswsgwglwlzznpnwpnnjlnlrnntllhvvdrvvprpptqqlzqzrrgfgfhfvhhcscjjfmmjpmjjvwvtvhvqhqvvqvwvpvsschhlmlrlmljjqnqggbwbmwbwgbwwgllqzllrjlrjjfjzffthhpvvsddvjvvzsvvhghlhqqbnqqlnngsngnccnpccmttmrtmmlmccqbbjssbsqbqddnqqdvdvbvgbvvjfjhjzzfhfzffgccdjcjtjpttcrrffvddwgglrgllbttcqtctqtvtwtggrppzvvbzvzgzsznnsqnsqqnwwzrwwnwbwnnhznhzhchwwvwhwlwlnnmwmfmfrmmnvndnffjgjmgmfmhmtmstthjhbjhjddrqrllnflnnwzwjjthjhwhmmflmlfmfddqgdqgqqwbbdsstssrvvbpbgppfwfvvglvvzgvgmvgvzvdvcctddjqddffrprbrggpgpghhwzhzggqrqsrstrssnttrgrsswsrstsdtdzttzvznzjnzzqssjwswcswsgghqghqgqvggtsswwmbbfrrdcctjtjsttrccqbbtcctcscqsssvmmdhmdmvdmvmsvsrvsrvsszvvrpvrpprvppctclcrrchhtmmbddswddglgrrdcdppcbpbgpbggbssnrnbrbllqwqbwbmmcwmmrjrdjjpsjppblbjbsbsgswsmwmgwgmmqpplzlssvcscnngwgvvffvlvtvtddgqgttjljggfzggmfgfqqtrrdbdbbnjnnbjbwwjjqljlnjjvzvhvlhhhsfhsfscsjcjsjbsjjdbdbpbqqsggcnczcchrhjhphlppnwwhthghhfvfrrbzrbrrcsszfmhrjflswthfrlmjbnhblmsldjpnrdgfbcrftnbcltlctbdthhjzsqvbmppcbhctqbtfhdrtrbzjpnzzvtfjtpqgbtmdcnjgtblhmvrpbrcpqfhpzqvbfqhsrjqwqqnggrlgvwndqrhvpzhswnglngwjdgwcnngrvhtcsblpdshqcwfpzcpmrbzqjfpllbbvlcfjtdqchjsgsqgqzsbfnnqcsvpwfmzdhzmcjfjnczldclvpfpntppqbhfqzqdtfwsvdzhphwpzhqqfflswhtldlrmrqpfdlwwszphrwjqvhpqmrzvblvtvsfpgzdhnlmsgpqnqdtbjqccbtnvqmtdggdsvvfwjzbdpnztmsblpgcrmppblmtfnjvjwmhnwqdmdrvbvsvhgbhjwzjfcqzwtvzlfmpzvpwsdsqphmqlzwfrqdjdbsmfdzllqqfhmcmhchjpbqtjbczhbcllmtqgczdfnjsjhhcsfdhwwbzzjdqtlvgfgfwbqztqftfqhsfvbzjcbmtdzszfsgzpqpvtqnmjhlrtbvfphvhwbnqsnwgpznnwcbbvdqvvzllqpjbqhqwtfzlhqgvmrpjmlvczqgmffsjvgzvnvccgnmdmbcqjqvbnzvdgnbdwbszldjwjdsnplgqnjmlvrlzcvlgtrdndhjmrtczqjqrzzzclrdmdmrgvljstqfhldfzgvhcdtmncqjjnghgwdgnhbjztfgpqnvfhzngqcftpbqsnvgrqpczwptghbssljnftzmbrqmnbvcbsshvmmmczjgnbjwltflndtntmfznmqhzjjtmmtwbflhmqcmlmzrnvfqzmzhhszqmmqwgzcnncjwvdzvczsgbpcscjptfpwhvvvstvqzhtptrmbhttcrdzhljpmclrbnzmvmtbmmdhfgpjjwsldsgdjflhmfrgvmgzvntgmlglfsntpjjwgnpwsjvsnbctwlsqvprlfmsqfdmzdsdvbtsnqzflvtlgrmdhfgfmwrcqjvbwqsblnwlmtqfhdwwlchqljbljwzmmqgqpwfnmjlvhmppzsdjlbvqwmwqwqqsrgzmpzzzzstrtrbwttzjcmlssstpntnrwtgthrfmthbjjmmtcvjnwsdpdndccgncjbjdqbwtlbfcmgvmlbrdzzlzcpctjvldbpvvmsrwrhhtdsrwljtmntcftwvppjvtttgslrdvpglzdnhrgnrzjsczsmtcfclhvncrhsfvbppqrbwsmjbhjmllwwlqvhbljrqpzshqvllzqtjfhdlnghwblzjldcmfgfjgcbfwqldvdppjmsqqqmznwtcgpmlpqmdpzctwjpnstvgjsbzspfbvfcrgzzcdbzfthgbjrnjwpprblnhdcfgpdcmljpqqzchslpvlwqjvsqtnvnfjhpvwjnjzghnbslhmrhwdppgtvzzmhzzzsvldphjlhrfjwrctfcmnzpvvwqrczcsmznflcwzsplrsdvmfghmnbbjdzclnzpbtjllcszzjcqbbczqhbnfpcctbmhfglsdtnzdjrjbjqczqflznfwzsrmpcgvgrjmhtpgllcpdnlrzvqljprnpvcglvmbtbzjwqfrhdngwsrfjsqnhfncnvprrcngjzfdvcnphcchbqhqpbbbzgmbfndlffnrpzvplptnrvjlzfczvsbctmdqrzdnpvrtgnsgdjwqshglspdzbhflfbsfvbrqgfzmhzhshdlcnqhzbnhbhmsgffgsmvglhscqsrsvmszjfgdhsglbqgwwjndscsqvpccwhlvjbtvftdppcscjblwtmpvvchpzwmblmbbrrvwlglfqwtgcffnzljnmtpbcrszvblwfqdslpqlrmnvrhvrzwnprnmntzrpsdcnwfgljldpvjwwzzbpcltnvghqvqnvmmrfqsnbstdctqqgtpzqttnrrdstrtlfzmvvbzzwwchrscqlnpzdmphdwdqdwbszlhwsbfscthndrdvhtgbpsmznlfjpwjchvzbmrflcphhgjfwstjnzlllztgzjmnwcglmhrbztzdnbcbrgrlmpprrbthbhslfrsjsrrrqvwmqghcgdvvsmrqdwwbdnzmnsqfflpbbjvzjdgsfjdjmbhptmrnbqpqhcdwtvbdlrdzsrchqlsrccjfbfrnnrctdsqbnjzzvrlcwphsscppdmsbrqrzddrdvjwfrldccmzwrhrbpcqpnvnbgpsrhvbchmrdtwqrlvpwhqgnppmsdvqdldlrjrzntlsfwmwhjsghddsppchqlltrhlwrccvflwjbvptclqvwdmrmghbngbflfspsjmglzcqjdtdtldmmngljwfqvfwnmfdtrsmlqzszhzccgvbnnwtpbgssrcqlqgrsjqfhhwpvdtsclgsntwvcsfpvwfqnmwhmtldfswqrsvzshfzwlnwhqhwsrqqzlsdhvqfwnhjcvmplcljmlhbtqtrpjfjfdfmlhtfpnszptfnjbldscjgvjhpzflhm";
	}
}
