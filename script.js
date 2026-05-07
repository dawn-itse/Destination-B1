// Dữ liệu được tạo từ file Markdown bạn gửi.
// Cấu trúc chính vẫn đúng yêu cầu: unit, englishWord, vietnameseMeaning, example.
// Mình thêm pronunciation để hiển thị phiên âm từ file gốc.
const vocabularyData = [
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "beat (v)",
    "pronunciation": "/biːt/",
    "vietnameseMeaning": "đánh/ đấm",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "board game (np)",
    "pronunciation": "/ˈbɔːrd ˌɡeɪm/",
    "vietnameseMeaning": "trò chơi cờ bàn",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "captain (n)",
    "pronunciation": "/ˈkæp.tən/",
    "vietnameseMeaning": "đội trưởng/ thủ lĩnh",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "champion (n)",
    "pronunciation": "/ˈtʃæm.pi.ən/",
    "vietnameseMeaning": "nhà vô địch",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "cheat (v)",
    "pronunciation": "/tʃiːt/",
    "vietnameseMeaning": "gian lận",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "classical music (np)",
    "pronunciation": "/ˌklæs.ɪ.kəl ˈmjuː.zɪk/",
    "vietnameseMeaning": "nhạc cổ điển",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "challenge (n)",
    "pronunciation": "/ˈtʃæl.ɪndʒ/",
    "vietnameseMeaning": "thử thách/ khó khăn",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "club (n)",
    "pronunciation": "/klʌb/",
    "vietnameseMeaning": "câu lạc bộ",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "coach (n)",
    "pronunciation": "/koʊtʃ/",
    "vietnameseMeaning": "huấn luyện viên",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "competition (n)",
    "pronunciation": "/ˌkɑːm.pəˈtɪʃ.ən/",
    "vietnameseMeaning": "cuộc thi",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "concert (n)",
    "pronunciation": "/ˈkɑːn.sɚt/",
    "vietnameseMeaning": "nhạc hội/ buổi biểu diễn",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "defeat (v)",
    "pronunciation": "/dɪˈfiːt/",
    "vietnameseMeaning": "đánh bại",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "entertaining (adj)",
    "pronunciation": "/en.tɚˈteɪ.nɪŋ/",
    "vietnameseMeaning": "mang tính giải trí",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "folk music (np)",
    "pronunciation": "/ˈfoʊk ˌmju·zɪk/",
    "vietnameseMeaning": "nhạc dân gian",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "group (n)",
    "pronunciation": "/ɡruːp/",
    "vietnameseMeaning": "nhóm",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "gym (n)",
    "pronunciation": "/dʒɪm/",
    "vietnameseMeaning": "phòng tập thể hình",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "have fun",
    "pronunciation": "",
    "vietnameseMeaning": "cảm thấy vui",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "opponent (n)",
    "pronunciation": "/əˈpoʊ.nənt/",
    "vietnameseMeaning": "đối thủ",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "member (n)",
    "pronunciation": "/ˈmem.bɚ/",
    "vietnameseMeaning": "thành viên",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "organise (v)",
    "pronunciation": "/ˈɔːr.ɡən.aɪz/",
    "vietnameseMeaning": "tổ chức/ sắp xếp",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "referee (n)",
    "pronunciation": "/ˌref.əˈriː/",
    "vietnameseMeaning": "trọng tài",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "pleasure (n)",
    "pronunciation": "/ˈpleʒ.ɚ/",
    "vietnameseMeaning": "niềm hân hoan/ vui sướng",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "rhythm (n)",
    "pronunciation": "/ˈrɪð.əm/",
    "vietnameseMeaning": "giai điệu",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "risk (v/n)",
    "pronunciation": "/rɪsk/",
    "vietnameseMeaning": "rủi ro",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "score (v/n)",
    "pronunciation": "/skɔːr/",
    "vietnameseMeaning": "ghi bàn/ điểm số",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "support (v/n)",
    "pronunciation": "/səˈpɔːrt/",
    "vietnameseMeaning": "hỗ trợ",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "team (n)",
    "pronunciation": "/tiːm/",
    "vietnameseMeaning": "đội nhóm",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "train (v)",
    "pronunciation": "/treɪn/",
    "vietnameseMeaning": "huấn luyện",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "video game (np)",
    "pronunciation": "/ˈvɪd.i.oʊ ˌɡeɪm/",
    "vietnameseMeaning": "trò chơi điện tử",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "act (v)",
    "pronunciation": "/ækt/",
    "vietnameseMeaning": "hành động",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "athlete (n)",
    "pronunciation": "/ˈæθ.liːt/",
    "vietnameseMeaning": "vận động viên",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "child (n)",
    "pronunciation": "/tʃaɪld/",
    "vietnameseMeaning": "trẻ em (số ít)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "collect (v)",
    "pronunciation": "/kəˈlekt/",
    "vietnameseMeaning": "thu thập/ nhặt nhạnh",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "hero (n)",
    "pronunciation": "/ˈhɪr.oʊ/",
    "vietnameseMeaning": "anh hùng",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "music (n)",
    "pronunciation": "/ˈmjuː.zɪk/",
    "vietnameseMeaning": "âm nhạc",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "play (v/n)",
    "pronunciation": "/ˈpleɪ/",
    "vietnameseMeaning": "chơi/ vở kịch",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "sail (v)",
    "pronunciation": "/seɪl/",
    "vietnameseMeaning": "chèo (thuyền)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "sing (v)",
    "pronunciation": "/sɪŋ/",
    "vietnameseMeaning": "ca hát",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "carry on",
    "pronunciation": "",
    "vietnameseMeaning": "tiến hành",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "eat out",
    "pronunciation": "",
    "vietnameseMeaning": "ăn ở ngoài",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "give up",
    "pronunciation": "",
    "vietnameseMeaning": "từ bỏ",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "join in",
    "pronunciation": "",
    "vietnameseMeaning": "gia nhập",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "send off",
    "pronunciation": "",
    "vietnameseMeaning": "bị đuổi/ sa thải (khỏi nhóm)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "take up",
    "pronunciation": "",
    "vietnameseMeaning": "đảm nhận/ bắt đầu (thú vui/ thói quen)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "turn down",
    "pronunciation": "",
    "vietnameseMeaning": "giảm (âm lượng)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "turn up",
    "pronunciation": "",
    "vietnameseMeaning": "tăng (âm lượng)",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be bored with",
    "pronunciation": "",
    "vietnameseMeaning": "cảm thấy chán nản",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be crazy about",
    "pronunciation": "",
    "vietnameseMeaning": "cuồng nhiệt vì điều gì",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be good at",
    "pronunciation": "",
    "vietnameseMeaning": "giỏi làm gì",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be interested in",
    "pronunciation": "",
    "vietnameseMeaning": "cảm thấy hứng thú vì điều gì",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be keen on",
    "pronunciation": "",
    "vietnameseMeaning": "thích làm gì",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "be popular with",
    "pronunciation": "",
    "vietnameseMeaning": "nổi tiếng nhờ điều gì",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "a book by sb about",
    "pronunciation": "",
    "vietnameseMeaning": "cuốn sách được viết bởi … về…",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "a fan of",
    "pronunciation": "",
    "vietnameseMeaning": "người hâm mộ của",
    "example": ""
  },
  {
    "unit": "Unit 03: Fun And Game",
    "englishWord": "a game against",
    "pronunciation": "",
    "vietnameseMeaning": "trận đấu đối kháng/ đối đầu với",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "achieve (v)",
    "pronunciation": "/əˈtʃiːv/",
    "vietnameseMeaning": "đạt được/ gặt hái",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "achievement (n)",
    "pronunciation": "/əˈtʃiːvmənt/",
    "vietnameseMeaning": "thành tựu",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "brain (n)",
    "pronunciation": "/brein/",
    "vietnameseMeaning": "não bộ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "brainstorm (v)",
    "pronunciation": "/ˈbreɪnstɔːm/",
    "vietnameseMeaning": "động não",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "concentrate on = focus on",
    "pronunciation": "/ˈkɑːnsntreɪt/",
    "vietnameseMeaning": "tập trung",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "consider to V",
    "pronunciation": "/kənˈsɪdər/",
    "vietnameseMeaning": "xem xét/ cân nhắc làm gì",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "course (n)",
    "pronunciation": "/kɔːrs/",
    "vietnameseMeaning": "khóa học",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "expert (n/ adj)",
    "pronunciation": "/ˈekspɜːrt/",
    "vietnameseMeaning": "chuyên gia",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "degree (n)",
    "pronunciation": "/dɪˈɡriː/",
    "vietnameseMeaning": "bằng cấp",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "fail (v)",
    "pronunciation": "/feɪl/",
    "vietnameseMeaning": "thất bại",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "failure (n)",
    "pronunciation": "/ˈfeɪljər/",
    "vietnameseMeaning": "sự tụt dốc, thất bại",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "guess (n/v)",
    "pronunciation": "/ɡes/",
    "vietnameseMeaning": "đoán",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "hesitate to V (v)",
    "pronunciation": "ˈhezɪteɪt/",
    "vietnameseMeaning": "do dự",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "instruction (n)",
    "pronunciation": "/ɪnˈstrʌkʃn/",
    "vietnameseMeaning": "sự chỉ dẫn",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "make progress (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tiến bộ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "make sure (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chắc chắn",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "mark (n/v)",
    "pronunciation": "/mɑːrk/",
    "vietnameseMeaning": "vết bớt (n)/ đánh dấu (v)",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "mental (adj)",
    "pronunciation": "/ˈmentl/",
    "vietnameseMeaning": "tình thần",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "physical (adj)",
    "pronunciation": "/ˈfɪzɪkl/",
    "vietnameseMeaning": "thuộc về thể chất",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "qualification (n)",
    "pronunciation": "/ˌkwɑːlɪfɪˈkeɪʃn/",
    "vietnameseMeaning": "chứng chỉ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "remind (v)",
    "pronunciation": "/rɪˈmaɪnd/",
    "vietnameseMeaning": "nhắc ai đó làm gì",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "search (n/v)",
    "pronunciation": "/sɜːrtʃ/",
    "vietnameseMeaning": "tìm kiếm/ sự truy lùng",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "revise (v)",
    "pronunciation": "/rɪˈvaɪz/",
    "vietnameseMeaning": "ôn tập",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "skill (n)",
    "pronunciation": "/skɪl/",
    "vietnameseMeaning": "kỹ năng",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "take an exam (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đi thi",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "term (n)",
    "pronunciation": "/tɜːm/",
    "vietnameseMeaning": "kỳ học/ thuật ngữ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "wonder (v)",
    "pronunciation": "/ˈwʌndə(r)/",
    "vietnameseMeaning": "thắc mắc",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "cross out",
    "pronunciation": "/krɒs/",
    "vietnameseMeaning": "gạch ngang/ gạch bỏ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "look up",
    "pronunciation": "",
    "vietnameseMeaning": "tìm kiếm = seek = search",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "point out",
    "pronunciation": "",
    "vietnameseMeaning": "chỉ ra/ làm nổi bật",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "rip up",
    "pronunciation": "",
    "vietnameseMeaning": "xé",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "rub out",
    "pronunciation": "",
    "vietnameseMeaning": "tẩy xóa",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "turn over",
    "pronunciation": "",
    "vietnameseMeaning": "lộn ngược lại",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "learn smth by heart",
    "pronunciation": "",
    "vietnameseMeaning": "học thuộc lòng",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "in favor of",
    "pronunciation": "",
    "vietnameseMeaning": "ủng hộ ai = support = advocate",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "divide (v) sth into",
    "pronunciation": "",
    "vietnameseMeaning": "chia cái gì",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "memory (n)",
    "pronunciation": "",
    "vietnameseMeaning": "trí nhớ",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "capable of = be able to V",
    "pronunciation": "",
    "vietnameseMeaning": "có khả năng làm gì",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "talented at = good at",
    "pronunciation": "",
    "vietnameseMeaning": "giỏi/ có tài làm gì đó",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "cheat at/ in + N/ V-ing",
    "pronunciation": "",
    "vietnameseMeaning": "gian lận",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "confuse A with B",
    "pronunciation": "",
    "vietnameseMeaning": "nhầm lẫn giữa A với B",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "cope with",
    "pronunciation": "/kəʊp//wɪθ/",
    "vietnameseMeaning": "đối đầu với = face = encounter",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "help sb with smth",
    "pronunciation": "",
    "vietnameseMeaning": "giúp ai làm gì",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "succeed in",
    "pronunciation": "",
    "vietnameseMeaning": "thành công",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "an opinion about/ of smth",
    "pronunciation": "",
    "vietnameseMeaning": "có quan điểm/ ý kiến về",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "arithmetic (n)",
    "pronunciation": "/əˈriθmətik/",
    "vietnameseMeaning": "số học / arithmetical (adj)",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "disaster (n)",
    "pronunciation": "/dɪˈzɑːstə(r)/",
    "vietnameseMeaning": "thảm họa",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "essay (n)",
    "pronunciation": "/ˈeseɪ/",
    "vietnameseMeaning": "bài luận",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "neat (adj)",
    "pronunciation": "/niːt/",
    "vietnameseMeaning": "gọn gàng",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "astronomy (n)",
    "pronunciation": "/əˈstrɑːnəmi/",
    "vietnameseMeaning": "thiên văn học",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "astrology (n)",
    "pronunciation": "/əˈstrɑːlədʒi/",
    "vietnameseMeaning": "chiêm tinh học",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "reptile (n)",
    "pronunciation": "/ˈreptaɪl/",
    "vietnameseMeaning": "động vật bò sát",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "insect (n)",
    "pronunciation": "/ˈɪnsekt/",
    "vietnameseMeaning": "côn trùng",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "dinosaur (n)",
    "pronunciation": "/ˈdaɪnəsɔːr/",
    "vietnameseMeaning": "khủng long",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "amphibian (n)",
    "pronunciation": "/æmˈfɪbiən/",
    "vietnameseMeaning": "động vật lưỡng cư",
    "example": ""
  },
  {
    "unit": "Unit 06: Learning And Doing",
    "englishWord": "shame (n)",
    "pronunciation": "/ʃeɪm/",
    "vietnameseMeaning": "sự tủi thẹn",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "abroad (adv)",
    "pronunciation": "/əˈbrɑːd/",
    "vietnameseMeaning": "đi nước ngoài (go abroad)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "accommodation (n)",
    "pronunciation": "/əˌkɑː.məˈdeɪ.ʃən/",
    "vietnameseMeaning": "nơi ở",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "accommodate (v)",
    "pronunciation": "/əˈkɑː.mə.deɪt/",
    "vietnameseMeaning": "cung cấp cho ai cái gì (nơi ở)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "book (v)",
    "pronunciation": "/bʊk/",
    "vietnameseMeaning": "đặt trước (vé xe, khách sạn…)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "break (n)",
    "pronunciation": "/breɪk/",
    "vietnameseMeaning": "khoảng thời gian nghỉ ngơi",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "break into (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đột nhập",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "cancel (v)",
    "pronunciation": "/ˈkæn.səl/",
    "vietnameseMeaning": "hủy (lịch/ cuộc họp, sự kiện)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "catch (v)",
    "pronunciation": "/kætʃ/",
    "vietnameseMeaning": "đuổi/ bắt/ tóm",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "coach (n)",
    "pronunciation": "/koʊtʃ/",
    "vietnameseMeaning": "xe khách",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "convenient (adj)",
    "pronunciation": "/kənˈviː.ni.ənt/",
    "vietnameseMeaning": "tiện lợi",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "crash (v)",
    "pronunciation": "/kræʃ/",
    "vietnameseMeaning": "đâm vào",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "crash (n)",
    "pronunciation": "/kræʃ",
    "vietnameseMeaning": "tai nạn (giao thông), sự đụng độ",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "crowded (adj)",
    "pronunciation": "/ˈkraʊ.dɪd/",
    "vietnameseMeaning": "đông đúc",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "cruise (n)",
    "pronunciation": "/kruːz/",
    "vietnameseMeaning": "chuyến đi chơi thuyền",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "delay (v)",
    "pronunciation": "/dɪˈleɪ/",
    "vietnameseMeaning": "rời lịch",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "delay (n)",
    "pronunciation": "/dɪˈleɪ/",
    "vietnameseMeaning": "sự rời lịch (bắt đầu trễ hơn dự kiến)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "destination (n)",
    "pronunciation": "/ˌdes.təˈneɪ.ʃən/",
    "vietnameseMeaning": "điểm đến/ điểm du lịch",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "ferry (n)",
    "pronunciation": "/ˈfer.i/",
    "vietnameseMeaning": "tàu phà (cho chuyến đi ngắn)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "foreign (adj)",
    "pronunciation": "/ˈfɔːr.ən/",
    "vietnameseMeaning": "xuất xứ từ nước ngoài",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "harbor (n)",
    "pronunciation": "/ˈhɑː.bər/",
    "vietnameseMeaning": "bến cảng",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "journey (n)",
    "pronunciation": "/ˈdʒɝː.ni/",
    "vietnameseMeaning": "chuyến đi (du lịch)/ hành trình",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "luggage (n)",
    "pronunciation": "/ˈlʌɡ.ɪdʒ/",
    "vietnameseMeaning": "hành lý",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "nearby (adj)",
    "pronunciation": "ˈnɪəbaɪ",
    "vietnameseMeaning": "gần",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "nearby (adv)",
    "pronunciation": "ˈnɪəbaɪ",
    "vietnameseMeaning": "gần kề",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "pack (v)",
    "pronunciation": "/pæk/",
    "vietnameseMeaning": "đóng (hàng hóa/ hành lý)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "package (n)",
    "pronunciation": "/ˈpækɪdʒ/",
    "vietnameseMeaning": "túi hàng/ hành lý",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "platform (n)",
    "pronunciation": "/ˈplætfɔːrm/",
    "vietnameseMeaning": "nền tảng",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "passport (n)",
    "pronunciation": "/ˈpæspɔːrt/",
    "vietnameseMeaning": "hộ chiếu",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "public transport (np)",
    "pronunciation": "/ˌpʌblɪk ˈtrænspɔːrt/",
    "vietnameseMeaning": "phương tiện giao thông",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "reach (v)",
    "pronunciation": "/riːtʃ/",
    "vietnameseMeaning": "chạm tới",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "resort (n)",
    "pronunciation": "/rɪˈzɔːrt/",
    "vietnameseMeaning": "khu nghỉ dưỡng",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "resort to sth (v)",
    "pronunciation": "/rɪˈzɔːrt/",
    "vietnameseMeaning": "tận dụng tới thứ gì.",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "souvenir (n)",
    "pronunciation": "/ˈsuːvənɪr/",
    "vietnameseMeaning": "quà lưu niệm",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "traffic (n)",
    "pronunciation": "/ˈtræfɪk/",
    "vietnameseMeaning": "giao thông",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "trip (n)",
    "pronunciation": "/trɪp/",
    "vietnameseMeaning": "chuyến đi",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "vehicle (n)",
    "pronunciation": "/ˈviːhɪkl/ or /ˈviːəkl/",
    "vietnameseMeaning": "phương tiện",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "attract (v)",
    "pronunciation": "/əˈtrækt/",
    "vietnameseMeaning": "thu hút",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "attractive (adj)",
    "pronunciation": "/əˈtræktɪv/",
    "vietnameseMeaning": "lôi cuốn, quyến rũ",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "choice (n)",
    "pronunciation": "/tʃɔɪs/",
    "vietnameseMeaning": "sự lựa chọn",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "comfort (n)",
    "pronunciation": "/ˈkʌmfərt/",
    "vietnameseMeaning": "sự thoải mái",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "depart (v)",
    "pronunciation": "/dɪˈpɑːrt/",
    "vietnameseMeaning": "rời đi",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "direct (adj)",
    "pronunciation": "/daɪˈrekt/",
    "vietnameseMeaning": "trực tiếp",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "direction (n)",
    "pronunciation": "/daɪˈrekʃn/",
    "vietnameseMeaning": "phương hướng",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "get into (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đi vào (trong xe)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "get off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đi xuống (xe/ tàu)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "get on(to) (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đi lên (xe bus/ tàu điện)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "get out of + N",
    "pronunciation": "",
    "vietnameseMeaning": "đi ra ngoài (xe/ tòa nhà)",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "go away (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "rời đi",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "go back (to) (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "quay trở lại",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "set off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "khởi hành",
    "example": ""
  },
  {
    "unit": "Unit 09: Friends And Relations",
    "englishWord": "take off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "cất cánh (máy bay)",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "apology (n)",
    "pronunciation": "/əˈpɑːlədʒi/",
    "vietnameseMeaning": "lời xin lỗi",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "boyfriend (n)",
    "pronunciation": "/ˈbɔɪfrend/",
    "vietnameseMeaning": "bạn trai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "close (adj)",
    "pronunciation": "/kləʊz/",
    "vietnameseMeaning": "gần gũi/ gần với",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "confident (adj)",
    "pronunciation": "/ˈkɑːnfɪdənt/",
    "vietnameseMeaning": "tự tin",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "cool (adj)",
    "pronunciation": "/kuːl/",
    "vietnameseMeaning": "ngầu/ mát mẻ",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "couple (n)",
    "pronunciation": "/ˈkʌpl/",
    "vietnameseMeaning": "cặp đôi",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "decorate (v)",
    "pronunciation": "/ˈdekəreɪt/",
    "vietnameseMeaning": "trang trí",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "refurbish (v)",
    "pronunciation": "/ˌriːˈfɜːrbɪʃ/",
    "vietnameseMeaning": "tân trang",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "renovate (v)",
    "pronunciation": "/ˈrenəveɪt/",
    "vietnameseMeaning": "tân trang",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "divorced (adj)",
    "pronunciation": "/dɪˈvɔːrst/",
    "vietnameseMeaning": "ly dị",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "divorce (v)",
    "pronunciation": "/dɪˈvɔːrs/",
    "vietnameseMeaning": "ly dị",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "flat (n)",
    "pronunciation": "/flæt/",
    "vietnameseMeaning": "căn hộ",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "flat (adj)",
    "pronunciation": "/flæt/",
    "vietnameseMeaning": "bằng phẳng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "generous (adj)",
    "pronunciation": "/ˈdʒenərəs/",
    "vietnameseMeaning": "hào phóng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "girlfriend (n)",
    "pronunciation": "/ˈɡɜːrlfrend/",
    "vietnameseMeaning": "bạn gái",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "grateful (adj)",
    "pronunciation": "/ˈɡreɪtfl/",
    "vietnameseMeaning": "biết ơn",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "guest (n)",
    "pronunciation": "/ɡest/",
    "vietnameseMeaning": "khách hàng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "independent (adj)",
    "pronunciation": "/ˌɪndɪˈpendən t/",
    "vietnameseMeaning": "độc lập",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "introduce (v)",
    "pronunciation": "/ˌɪntrəˈduːs/",
    "vietnameseMeaning": "giới thiệu",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "loyal (adj)",
    "pronunciation": "/ˈlɔɪəl/",
    "vietnameseMeaning": "lòng trung thành",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "royal (adj)",
    "pronunciation": "/ˈrɔɪəl/",
    "vietnameseMeaning": "thuộc hoàng gia",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "mood (n)",
    "pronunciation": "/muːd/",
    "vietnameseMeaning": "tâm trạng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "neighbourhood (n)",
    "pronunciation": "/ˈneɪbərhʊd/",
    "vietnameseMeaning": "hàng xóm",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "bring up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "= take care of: chăm sóc/ nuôi dưỡng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "fall out (with) (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tranh luận với ai/ không còn làm bạn với ai nữa",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "get on (with)",
    "pronunciation": "",
    "vietnameseMeaning": "có mối quan hệ tối với ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "go out with (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "trở thành bạn trai/ bạn gái của ai đó",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "grow up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "lớn lên/ trưởng thành hơn",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "let (sb) down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "làm ai thất vọng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "look after (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chăm sóc ai đó",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "split up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "kết thúc mối quan hệ/ ly dị/ chia tay",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be able to V",
    "pronunciation": "",
    "vietnameseMeaning": "có khả năng làm gì",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "admire sb for (v)",
    "pronunciation": "/ədˈmaɪər/",
    "vietnameseMeaning": "ngưỡng mộ ai đó",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "care (v)",
    "pronunciation": "/ker/",
    "vietnameseMeaning": "chăm sóc",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "confident (adj)",
    "pronunciation": "/ˈkɑːnfɪdənt/",
    "vietnameseMeaning": "tự tin",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "forgive (v)",
    "pronunciation": "/fərˈɡɪv/",
    "vietnameseMeaning": "tha thứ ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "honest (adj)",
    "pronunciation": "/ˈɑːnɪst/",
    "vietnameseMeaning": "thành thật",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "introduction (n)",
    "pronunciation": "/ˌɪntrəˈdʌkʃn/",
    "vietnameseMeaning": "sự giới thiệu/ lời giới thiệu",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "lie (v)",
    "pronunciation": "/laɪ/",
    "vietnameseMeaning": "nói dối",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "person (n)",
    "pronunciation": "/ˈpɜːrsn/",
    "vietnameseMeaning": "một người",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "relate to smth (v)",
    "pronunciation": "",
    "vietnameseMeaning": "liên quan tới ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be fond of",
    "pronunciation": "",
    "vietnameseMeaning": "thích làm cái gì",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be jealous of",
    "pronunciation": "",
    "vietnameseMeaning": "ghen tỵ với",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be kind to",
    "pronunciation": "",
    "vietnameseMeaning": "tốt bụng",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be married to",
    "pronunciation": "",
    "vietnameseMeaning": "kết hôn với ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "be proud of",
    "pronunciation": "",
    "vietnameseMeaning": "tự hào về ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "apologise to sb for",
    "pronunciation": "",
    "vietnameseMeaning": "xin lỗi ai vì làm gì",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "argue with sb about",
    "pronunciation": "",
    "vietnameseMeaning": "tranh luận với ai về điều gì",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "care about",
    "pronunciation": "",
    "vietnameseMeaning": "quan tâm tới điều gì",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "chat to sb about",
    "pronunciation": "",
    "vietnameseMeaning": "nhắn tin với ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "an argument with sb about",
    "pronunciation": "",
    "vietnameseMeaning": "tranh luận với ai",
    "example": ""
  },
  {
    "unit": "Unit 12: Friends And Relatives",
    "englishWord": "have a relationship with",
    "pronunciation": "",
    "vietnameseMeaning": "có mối quan hệ với ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "advertisement (n)",
    "pronunciation": "/ˌædvərˈtaɪzmənt/",
    "vietnameseMeaning": "quảng cáo",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "afford (v)",
    "pronunciation": "/əˈfɔːrd/",
    "vietnameseMeaning": "chi trả",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "bargain (v)",
    "pronunciation": "/ˈbɑːrɡən/",
    "vietnameseMeaning": "mặc cả",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "brand (n)",
    "pronunciation": "/brænd/",
    "vietnameseMeaning": "nhãn hàng",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "catalogue (n)",
    "pronunciation": "/ˈkætəlɔːɡ/",
    "vietnameseMeaning": "mục lục",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "change (n)",
    "pronunciation": "/tʃeɪndʒ/",
    "vietnameseMeaning": "sự thay đổi/ tiền lẻ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "coin (n)",
    "pronunciation": "/kɔɪn/",
    "vietnameseMeaning": "tiền xu",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "cost (n/v)",
    "pronunciation": "/kɔːst/",
    "vietnameseMeaning": "giá tiền/ đáng bao nhiêu tiền",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "customer (n)",
    "pronunciation": "/ˈkʌstəmər/",
    "vietnameseMeaning": "khách hàng",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "be in debt",
    "pronunciation": "/det/",
    "vietnameseMeaning": "nợ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "demand (v)",
    "pronunciation": "/dɪˈmænd/",
    "vietnameseMeaning": "đòi hỏi",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "export (v)",
    "pronunciation": "/ˈekspɔːrt/",
    "vietnameseMeaning": "xuất khẩu",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "import (v)",
    "pronunciation": "/ˈɪmpɔːrt/",
    "vietnameseMeaning": "nhập khẩu",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "fee (n)",
    "pronunciation": "/fiː/",
    "vietnameseMeaning": "chi phí",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "fortune (n)",
    "pronunciation": "/ˈfɔːrtʃən/",
    "vietnameseMeaning": "sự may mắn",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "invest (v)",
    "pronunciation": "/ɪnˈvest/",
    "vietnameseMeaning": "đầu tư",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "obtain (v)",
    "pronunciation": "/əbˈteɪn/",
    "vietnameseMeaning": "đạt được",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "owe (v)",
    "pronunciation": "/əʊ/",
    "vietnameseMeaning": "nợ lần",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "profit (n)",
    "pronunciation": "/ˈprɑːfɪt/",
    "vietnameseMeaning": "tiền lời, lợi nhuận",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "property (n)",
    "pronunciation": "/ˈprɑːpərti/",
    "vietnameseMeaning": "tài sản",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "purchase (n/v)",
    "pronunciation": "/ˈpɜːrtʃəs/",
    "vietnameseMeaning": "mua",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "receipt (n)",
    "pronunciation": "/rɪˈsiːt/",
    "vietnameseMeaning": "giấy biên nhận/ hóa đơn",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "require (v)",
    "pronunciation": "/rɪˈkwaɪər/",
    "vietnameseMeaning": "đòi hỏi/ yêu cầu",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "sale (n)",
    "pronunciation": "/seɪl/",
    "vietnameseMeaning": "giảm giá",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "save (v)",
    "pronunciation": "/seɪv/",
    "vietnameseMeaning": "lưu trữ/ tiết kiệm",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "select (v)",
    "pronunciation": "/sɪˈlekt/",
    "vietnameseMeaning": "lựa chọn",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "supply (v/n)",
    "pronunciation": "/səˈplaɪ/",
    "vietnameseMeaning": "cung cấp",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "a variety of N (n)",
    "pronunciation": "/vəˈraɪəti/",
    "vietnameseMeaning": "đa dạng",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "waste (n/v)",
    "pronunciation": "/weɪst/",
    "vietnameseMeaning": "sự lãng phí/ lãng phí",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "expense (n)",
    "pronunciation": "/ɪkˈspens/",
    "vietnameseMeaning": "chi phí",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "judge (v)",
    "pronunciation": "/dʒʌdʒ/",
    "vietnameseMeaning": "đánh giá",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "serve (v)",
    "pronunciation": "/sɜːrv/",
    "vietnameseMeaning": "phục vụ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "value (n)",
    "pronunciation": "/ˈvæljuː/",
    "vietnameseMeaning": "giá trị",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "add up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thêm vào/ cộng dồn",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "come back (from) (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "quay trở về từ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "give away (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tặng cho ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "hurry up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "nhanh/ gấp gáp",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "pay back (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "trả lại cho ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "save up (for)",
    "pronunciation": "",
    "vietnameseMeaning": "tiết kiệm tiền cho việc gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "take back (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "hoàn lại",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "take down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "gỡ/ dỡ bỏ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "for sale",
    "pronunciation": "",
    "vietnameseMeaning": "giao bán",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "be in good/ bad condition",
    "pronunciation": "",
    "vietnameseMeaning": "trong trạng thái tốt/ tệ",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "in cash",
    "pronunciation": "",
    "vietnameseMeaning": "bằng tiền mặt",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "for rent",
    "pronunciation": "",
    "vietnameseMeaning": "cho thuê",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "by credit card/ cheque",
    "pronunciation": "",
    "vietnameseMeaning": "bằng thẻ tín dụng",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "be wrong about/ with",
    "pronunciation": "",
    "vietnameseMeaning": "sai trái với điều gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "belong to",
    "pronunciation": "",
    "vietnameseMeaning": "thuộc về ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "borrow sth from",
    "pronunciation": "",
    "vietnameseMeaning": "mượn thứ gì từ ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "buy sth from",
    "pronunciation": "",
    "vietnameseMeaning": "mua thứ gì từ ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "compare sth to/ with",
    "pronunciation": "",
    "vietnameseMeaning": "so sánh thứ gì với ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "decide on",
    "pronunciation": "",
    "vietnameseMeaning": "quyết định về việc gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "decide to V",
    "pronunciation": "",
    "vietnameseMeaning": "quyết định làm gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "lend smth to",
    "pronunciation": "",
    "vietnameseMeaning": "cho ai mượn cái gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "pay for",
    "pronunciation": "",
    "vietnameseMeaning": "chi trả cho cái gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "spend smth on",
    "pronunciation": "",
    "vietnameseMeaning": "dành tiền/ thời gian cho ai",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "an advertisement for",
    "pronunciation": "",
    "vietnameseMeaning": "một bảng quảng cáo cho cái gì",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "truth (n)",
    "pronunciation": "/truːθ/",
    "vietnameseMeaning": "sự thật",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "own (v)",
    "pronunciation": "/əʊn/",
    "vietnameseMeaning": "sở hữu",
    "example": ""
  },
  {
    "unit": "Unit 15: Buying And Selling",
    "englishWord": "business (n)",
    "pronunciation": "/ˈbɪznəs/",
    "vietnameseMeaning": "kinh doanh",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "artificial (adj)",
    "pronunciation": "/ˌɑːrtɪˈfɪʃl/",
    "vietnameseMeaning": "nhân tạo",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "automatic (adj)",
    "pronunciation": "/ˌɔːtəˈmætɪk/",
    "vietnameseMeaning": "tự động",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "complicated (adj)",
    "pronunciation": "/ˈkɑːmplɪkeɪtɪd/",
    "vietnameseMeaning": "phức tạp",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "decrease (n/v)",
    "pronunciation": "/dɪˈkriːs/",
    "vietnameseMeaning": "giảm/ sự giảm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "digital (adj)",
    "pronunciation": "/ˈdɪdʒɪtl/",
    "vietnameseMeaning": "kỹ thuật số",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "discover (v)",
    "pronunciation": "/dɪˈskʌvər/",
    "vietnameseMeaning": "khám phá",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "effect (n)",
    "pronunciation": "/ɪˈfekt/",
    "vietnameseMeaning": "ảnh hưởng",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "equipment (n)",
    "pronunciation": "/ɪˈkwɪpmənt/",
    "vietnameseMeaning": "máy móc",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "equip sb with sth",
    "pronunciation": "/ɪˈkwɪp/",
    "vietnameseMeaning": "trang bị cái gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "estimate (v)",
    "pronunciation": "/ˈestɪmeɪt/",
    "vietnameseMeaning": "ước tính",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "exact (adj)",
    "pronunciation": "/ɪɡˈzækt/",
    "vietnameseMeaning": "chính xác",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "experiment (n)",
    "pronunciation": "/ɪkˈsperɪmənt/",
    "vietnameseMeaning": "thí nghiệm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "gadget (n)",
    "pronunciation": "/ˈɡædʒɪt/",
    "vietnameseMeaning": "công cụ",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "hardware (n)",
    "pronunciation": "/ˈhɑːrdwer/",
    "vietnameseMeaning": "phần cứng",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "software (n)",
    "pronunciation": "/ˈsɔːftwer/",
    "vietnameseMeaning": "phần mềm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "invent (v)",
    "pronunciation": "/ɪnˈvent/",
    "vietnameseMeaning": "sáng chế",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "involve in (v)",
    "pronunciation": "/ɪnˈvɑːlv/",
    "vietnameseMeaning": "có liên kết với",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "laboratory (n)",
    "pronunciation": "/ˈlæbrətɔːri/",
    "vietnameseMeaning": "phòng thí nghiệm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "lack (n/v)",
    "pronunciation": "/læk/",
    "vietnameseMeaning": "thiếu hụt cái gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "maximum (adj)",
    "pronunciation": "/ˈmæksɪməm/",
    "vietnameseMeaning": "tối đa",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "minimum (adj)",
    "pronunciation": "/ˈmɪnɪməm/",
    "vietnameseMeaning": "tối thiểu",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "operate (v)",
    "pronunciation": "/ˈɑːpəreɪt/",
    "vietnameseMeaning": "vận hành",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "plastic (n/adj)",
    "pronunciation": "/ˈplæstɪk/",
    "vietnameseMeaning": "nhựa",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "program (n/v)",
    "pronunciation": "/ˈprəʊɡræm/",
    "vietnameseMeaning": "chương trình",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "research (n)",
    "pronunciation": "/rɪˈsɜːrtʃ/",
    "vietnameseMeaning": "nghiên cứu",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "run (v)",
    "pronunciation": "/rʌn/",
    "vietnameseMeaning": "chạy/ vận hành",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "screen (n)",
    "pronunciation": "/skriːn/",
    "vietnameseMeaning": "màn hình",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "sudden (adj)",
    "pronunciation": "/ˈsʌdn/",
    "vietnameseMeaning": "đột ngột",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "technology (n)",
    "pronunciation": "/tekˈnɑːlədʒi/",
    "vietnameseMeaning": "công nghệ",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "unique (adj)",
    "pronunciation": "/juˈniːk/",
    "vietnameseMeaning": "độc đáo",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "boil (v)",
    "pronunciation": "/bɔɪl/",
    "vietnameseMeaning": "đun/ sôi",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "chemical (adj)",
    "pronunciation": "/ˈkemɪkl/",
    "vietnameseMeaning": "thuộc hóa học",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "conclude (v)",
    "pronunciation": "/kənˈkluːd/",
    "vietnameseMeaning": "kết luận",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "examine (v)",
    "pronunciation": "/ɪɡˈzæmɪn/",
    "vietnameseMeaning": "điều tra",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "fascination (n)",
    "pronunciation": "/ˌfæsɪˈneɪʃn/",
    "vietnameseMeaning": "sự hào hứng",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "identical (adj)",
    "pronunciation": "/aɪˈdentɪkl/",
    "vietnameseMeaning": "giống nhau",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "length (n)",
    "pronunciation": "/leŋkθ/",
    "vietnameseMeaning": "chiều dài",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "measure (n/v)",
    "pronunciation": "/ˈmeʒər/",
    "vietnameseMeaning": "giải pháp/ đo",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "science (n)",
    "pronunciation": "/ˈsaɪəns/",
    "vietnameseMeaning": "khoa học",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "break down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "hỏng (máy móc, xe cộ)",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "come across (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "vô tình lướt quá",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "find out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tìm ra (thông tin)",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "make up",
    "pronunciation": "",
    "vietnameseMeaning": "đưa ra lời biện hộ/ trang điểm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "pull off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "kéo/ rút thứ gì đó ra",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "by chance",
    "pronunciation": "",
    "vietnameseMeaning": "vô tình",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "in my opinion",
    "pronunciation": "",
    "vietnameseMeaning": "theo quan điểm",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "be different from/ to",
    "pronunciation": "",
    "vietnameseMeaning": "khác biệt với ai",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "be full of",
    "pronunciation": "",
    "vietnameseMeaning": "lấp đầy bởi cái gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "at the beginning of",
    "pronunciation": "",
    "vietnameseMeaning": "khởi đầu của",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "connect sth to/ with",
    "pronunciation": "",
    "vietnameseMeaning": "kết nối với ai",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "disconnect sth from",
    "pronunciation": "",
    "vietnameseMeaning": "ngắt kết nối khỏi thứ gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "fill sth with",
    "pronunciation": "",
    "vietnameseMeaning": "làm đầy thứ gì với",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "result in",
    "pronunciation": "",
    "vietnameseMeaning": "dẫn tới",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "result from",
    "pronunciation": "",
    "vietnameseMeaning": "là kết quả của",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "a difference between A and B",
    "pronunciation": "",
    "vietnameseMeaning": "sự khác nhau giữa A và B",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "an idea about",
    "pronunciation": "",
    "vietnameseMeaning": "ý tưởng về",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "a number of + N số nhiều",
    "pronunciation": "",
    "vietnameseMeaning": "rất nhiều cái gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "the number of + N số ít",
    "pronunciation": "",
    "vietnameseMeaning": "có một số lượng cái gì",
    "example": ""
  },
  {
    "unit": "Unit 18: Inventions And Discoveries",
    "englishWord": "a reason for",
    "pronunciation": "",
    "vietnameseMeaning": "lý do dành cho điều gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "accent (n)",
    "pronunciation": "/ˈæksənt/",
    "vietnameseMeaning": "ngữ điệu",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "announcement (n)",
    "pronunciation": "/əˈnaʊnsmənt/",
    "vietnameseMeaning": "thông báo",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "broadcast (v/n)",
    "pronunciation": "/ˈbrɔːdkæst/",
    "vietnameseMeaning": "phát tin/ chương trình TV",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "channel (n)",
    "pronunciation": "/ˈtʃænl/",
    "vietnameseMeaning": "kênh",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "clear (adj)",
    "pronunciation": "/klɪr/",
    "vietnameseMeaning": "rõ ràng/ trong sạch",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "click (v)",
    "pronunciation": "/klɪk/",
    "vietnameseMeaning": "nhấn chuột vào",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "contact (n/v)",
    "pronunciation": "/ˈkɑːntækt/",
    "vietnameseMeaning": "liên hệ",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "file (n)",
    "pronunciation": "/faɪl/",
    "vietnameseMeaning": "dữ liệu/ tài liệu",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "formal (adj)",
    "pronunciation": "/ˈfɔːrml/",
    "vietnameseMeaning": "lịch thiệp",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "informal (adj)",
    "pronunciation": "/ɪnˈfɔːrml/",
    "vietnameseMeaning": "gần gũi",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "image (n)",
    "pronunciation": "/ˈɪmɪdʒ/",
    "vietnameseMeaning": "hình ảnh",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "internet (n)",
    "pronunciation": "/ˈɪntərnet/",
    "vietnameseMeaning": "mạng",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "interrupt (v)",
    "pronunciation": "/ˌɪntəˈrʌpt/",
    "vietnameseMeaning": "can thiệp ai",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "link (v/n)",
    "pronunciation": "/lɪŋk/",
    "vietnameseMeaning": "kết nối/ đường liên kết",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "media (n)",
    "pronunciation": "/ˈmiːdiə/",
    "vietnameseMeaning": "truyền thông",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "mobile phone (n)",
    "pronunciation": "/ˌməʊbl ˈfəʊn/",
    "vietnameseMeaning": "máy điện thoại",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "online (adj/ adv)",
    "pronunciation": "/ˌɑːnˈlaɪn/",
    "vietnameseMeaning": "trực tuyến",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "pause (v/n)",
    "pronunciation": "/pɔːz/",
    "vietnameseMeaning": "dừng lại",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "persuade sb to V",
    "pronunciation": "/pərˈsweɪd/",
    "vietnameseMeaning": "thuyết phục ai làm gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "pronounce (v)",
    "pronunciation": "/prəˈnaʊns/",
    "vietnameseMeaning": "phát âm/ đọc thành tiếng",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "publish (v)",
    "pronunciation": "/ˈpʌblɪʃ/",
    "vietnameseMeaning": "đăng tin/ phát hành",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "ring (v)",
    "pronunciation": "/rɪŋ/",
    "vietnameseMeaning": "rung chuông",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "signal (n)",
    "pronunciation": "/ˈsɪɡnəl/",
    "vietnameseMeaning": "dấu hiệu",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "swear (v)",
    "pronunciation": "/swer/",
    "vietnameseMeaning": "chửi thề",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "viewer (n)",
    "pronunciation": "/ˈvjuːər/",
    "vietnameseMeaning": "người xem",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "website (n)",
    "pronunciation": "/ˈwebsaɪt/",
    "vietnameseMeaning": "trang web",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "whisper (v/n)",
    "pronunciation": "/ˈwɪspər/",
    "vietnameseMeaning": "thì thào",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "certain (adj)",
    "pronunciation": "/ˈsɜːtn/",
    "vietnameseMeaning": "chắc chắn",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "communicate (v)",
    "pronunciation": "/kəˈmjuːnɪkeɪt/",
    "vietnameseMeaning": "tiếp xúc/ trò chuyện với ai",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "connect (v)",
    "pronunciation": "/kəˈnekt/",
    "vietnameseMeaning": "kết nối",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "deliver (v)",
    "pronunciation": "/dɪˈlɪvər/",
    "vietnameseMeaning": "vận chuyển",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "express (v)",
    "pronunciation": "/ɪkˈspres/",
    "vietnameseMeaning": "bày tỏ",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "inform (v)",
    "pronunciation": "/ɪnˈfɔːrm/",
    "vietnameseMeaning": "thông báo",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "predict (v)",
    "pronunciation": "prɪˈdɪkt/",
    "vietnameseMeaning": "tiên đoán",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "translate (v)",
    "pronunciation": "/trænzˈleɪt/",
    "vietnameseMeaning": "dịch",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "call back (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "gọi điện cho ai (gọi lại)",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "come out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "lộ ra/ đăng tải",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "cut off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "bị mất liên lạc/kết nối",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "fill in (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thêm thông tin/ điền thông tin",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "print out",
    "pronunciation": "",
    "vietnameseMeaning": "in (giấy tờ)",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "hang up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "kết thúc cuộc gọi",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "log off",
    "pronunciation": "",
    "vietnameseMeaning": "thoát khỏi trang web",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "log on(to)",
    "pronunciation": "",
    "vietnameseMeaning": "kết nối với internet",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "comment on",
    "pronunciation": "",
    "vietnameseMeaning": "bình luận về cái gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "communicate with",
    "pronunciation": "",
    "vietnameseMeaning": "trò chuyện với ai",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "glance at",
    "pronunciation": "",
    "vietnameseMeaning": "nhìn chằm chằm vào cái gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "receive sth from sb",
    "pronunciation": "",
    "vietnameseMeaning": "nhận thứ gì từ ai",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "reply to sb",
    "pronunciation": "",
    "vietnameseMeaning": "phản hồi ai",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "send sth to sb",
    "pronunciation": "",
    "vietnameseMeaning": "gửi cho ai thứ gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "talk to sb about sth",
    "pronunciation": "",
    "vietnameseMeaning": "nói chuyện với ai về cái gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "tell sb about",
    "pronunciation": "",
    "vietnameseMeaning": "kể cho ai về điều gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "translate from A to B",
    "pronunciation": "",
    "vietnameseMeaning": "dịch từ A sang B",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "write to sb about",
    "pronunciation": "",
    "vietnameseMeaning": "viết cho ai để kể về điều gì",
    "example": ""
  },
  {
    "unit": "Unit 21: Sending And Receiving",
    "englishWord": "a letter from sb about sth",
    "pronunciation": "",
    "vietnameseMeaning": "lá thư từ ai với nội dung về",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "admit",
    "pronunciation": "ədˈmit",
    "vietnameseMeaning": "thừa nhận",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "arrest (v)",
    "pronunciation": "əˈrest",
    "vietnameseMeaning": "bắt giữ",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "charity (n)",
    "pronunciation": "ˈtʃær.ə.ti",
    "vietnameseMeaning": "tổ chức từ thiện, sự từ thiện",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "commit (v)",
    "pronunciation": "kəˈmɪt",
    "vietnameseMeaning": "cam kết, uỷ thác",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "community (n)",
    "pronunciation": "kəˈmjuː.nə.ti",
    "vietnameseMeaning": "cộng đồng",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "court (n)",
    "pronunciation": "kɔːt",
    "vietnameseMeaning": "toà án",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "criminal (n, adj)",
    "pronunciation": "ˈkrɪm.ɪ.nəl",
    "vietnameseMeaning": "tội phạm",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "culture (n)",
    "pronunciation": "ˈkʌl.tʃər",
    "vietnameseMeaning": "văn hoá",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "familiar (adj)",
    "pronunciation": "fəˈmɪl.i.ər",
    "vietnameseMeaning": "quen thuộc",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "government (n)",
    "pronunciation": "ˈɡʌv.ɚn.mənt",
    "vietnameseMeaning": "chính phủ",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "habit (n)",
    "pronunciation": "ˈhæb.ɪt",
    "vietnameseMeaning": "thói quen",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "identity card (n)",
    "pronunciation": "aɪˈden.tə.ti ˌkɑːrd",
    "vietnameseMeaning": "chứng minh nhân dân",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "illegal (adj)",
    "pronunciation": "ɪˈliː.ɡəl",
    "vietnameseMeaning": "phạm pháp",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "politics (n)",
    "pronunciation": "ˈpɒl.ə.tɪks",
    "vietnameseMeaning": "nhà chính trị",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "population (n)",
    "pronunciation": "ˌpɑː.pjəˈleɪ.ʃən",
    "vietnameseMeaning": "dân số",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "prison (n)",
    "pronunciation": "prɪz.ən",
    "vietnameseMeaning": "nhà tù",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "protest (v)",
    "pronunciation": "ˈprəʊ.test",
    "vietnameseMeaning": "phản đối",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "resident (n)",
    "pronunciation": "ˈrez.ɪ.dənt",
    "vietnameseMeaning": "cư dân",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "responsible (adj)",
    "pronunciation": "rɪˈspɒn.sə.bəl",
    "vietnameseMeaning": "trách nhiệm",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "rob (v)",
    "pronunciation": "rɒb",
    "vietnameseMeaning": "cướp",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "routine (n)",
    "pronunciation": "ruːˈtiːn",
    "vietnameseMeaning": "lịch trình thường ngày",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "schedule (n)",
    "pronunciation": "ˈʃedʒ.uːl",
    "vietnameseMeaning": "lịch trình",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "situation (n)",
    "pronunciation": "ˌsɪtʃ.uˈeɪ.ʃən",
    "vietnameseMeaning": "tình huống",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "social (adj)",
    "pronunciation": "ˈsəʊ.ʃəl",
    "vietnameseMeaning": "thuộc xã hội",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "society (n)",
    "pronunciation": "səˈsaɪ.ə.ti",
    "vietnameseMeaning": "xã hội",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "steal (v)",
    "pronunciation": "stiːl",
    "vietnameseMeaning": "trộm",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "tradition (n)",
    "pronunciation": "trəˈdɪʃ.ən",
    "vietnameseMeaning": "truyền thống",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "typical (adj)",
    "pronunciation": "ˈtɪp.ɪ.kəl",
    "vietnameseMeaning": "đặc trưng",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "youth club (n)",
    "pronunciation": "ˈjuːθ ˌklʌb",
    "vietnameseMeaning": "câu lạc bộ thanh niên",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "vote (v,n)",
    "pronunciation": "vəʊt",
    "vietnameseMeaning": "bỏ phiếu, phiếu bầu",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "break in(to)",
    "pronunciation": "",
    "vietnameseMeaning": "đột nhập",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "catch up with",
    "pronunciation": "",
    "vietnameseMeaning": "bắt kịp",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "get away with",
    "pronunciation": "",
    "vietnameseMeaning": "tránh xa",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "get up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thức dậy",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "move in (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chuyển đến",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "put away (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "cất đi, tiết kiệm",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "wake up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thức dậy, tỉnh dậy",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "wash up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "rửa sạch",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "against the law",
    "pronunciation": "",
    "vietnameseMeaning": "phạm pháp",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "at the age of",
    "pronunciation": "",
    "vietnameseMeaning": "ở độ tuổi",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "in public",
    "pronunciation": "",
    "vietnameseMeaning": "ở nơi công cộng",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "in response to",
    "pronunciation": "",
    "vietnameseMeaning": "để đáp lại",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "in touch with",
    "pronunciation": "",
    "vietnameseMeaning": "còn liên lạc với ai",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "in your teens/twenties,etc",
    "pronunciation": "",
    "vietnameseMeaning": "ở tuổi thiếu niên/hai mươi…",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "agree (v)",
    "pronunciation": "əˈɡriː",
    "vietnameseMeaning": "đồng ý",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "belief (n)",
    "pronunciation": "bɪˈliːf",
    "vietnameseMeaning": "niềm tin",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "courage (n)",
    "pronunciation": "ˈkʌr.ɪdʒ",
    "vietnameseMeaning": "lòng can đảm",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "elect (v)",
    "pronunciation": "iˈlekt",
    "vietnameseMeaning": "bầu chọn",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "equal (adj)",
    "pronunciation": "ˈiː.kwəl",
    "vietnameseMeaning": "bằng",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "life (n)",
    "pronunciation": "laɪf",
    "vietnameseMeaning": "cuộc sống",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "nation (n)",
    "pronunciation": "ˈneɪ.ʃən",
    "vietnameseMeaning": "quốc gia",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "peace (n)",
    "pronunciation": "piːs",
    "vietnameseMeaning": "hoà bình",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "prison (n)",
    "pronunciation": "ˈprɪz.ən",
    "vietnameseMeaning": "nhà tù",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "shoot (v)",
    "pronunciation": "ʃuːt",
    "vietnameseMeaning": "bắn",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "angry (with sb) about the guilt of",
    "pronunciation": "",
    "vietnameseMeaning": "Nổi nóng với ai đó về tội lỗi của ..",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "accuse sb of blame sb for",
    "pronunciation": "",
    "vietnameseMeaning": "Buộc tội ai về cái gì",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "blame sb on",
    "pronunciation": "",
    "vietnameseMeaning": "đổ lỗi cho ai",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "criticise sb for",
    "pronunciation": "",
    "vietnameseMeaning": "chỉ trích ai về điều gì",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "forget about",
    "pronunciation": "",
    "vietnameseMeaning": "quên cái gì",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "forgive sb for",
    "pronunciation": "",
    "vietnameseMeaning": "tha thứ cho ai cái gì",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "punish sb for",
    "pronunciation": "",
    "vietnameseMeaning": "trừng phạt ai vì điều gì",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "share sth with",
    "pronunciation": "",
    "vietnameseMeaning": "chia sẻ cái gì với ai",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "smile at",
    "pronunciation": "",
    "vietnameseMeaning": "mỉm cười với",
    "example": ""
  },
  {
    "unit": "Unit 24: People And Daily Life",
    "englishWord": "invite sb to",
    "pronunciation": "",
    "vietnameseMeaning": "mời ai làm gì",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "ambition (n)",
    "pronunciation": "/æmˈbɪʃ.ən/",
    "vietnameseMeaning": "tham vọng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "application (n)",
    "pronunciation": "/ˌæp.lɪˈkeɪ.ʃən/",
    "vietnameseMeaning": "ứng dụng, đơn xin việc",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "bank account (np)",
    "pronunciation": "/ˈbæŋk əˌkaʊnt/",
    "vietnameseMeaning": "tài khoản ngân hàng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "boss (n)",
    "pronunciation": "/bɒs/",
    "vietnameseMeaning": "sếp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "career (n)",
    "pronunciation": "/kəˈrɪər/",
    "vietnameseMeaning": "sự nghiệp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "colleague (n)",
    "pronunciation": "/ˈkɒl.iːɡ/",
    "vietnameseMeaning": "đồng nghiệp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "company (n)",
    "pronunciation": "/ˈkʌm.pə.ni/",
    "vietnameseMeaning": "công ty",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "contract (n)",
    "pronunciation": "/ˈkɒn.trækt/",
    "vietnameseMeaning": "hợp đồng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "department (n)",
    "pronunciation": "/dɪˈpɑːt.mənt/",
    "vietnameseMeaning": "phòng ban",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "deserve (v)",
    "pronunciation": "/dɪˈzɜːv/",
    "vietnameseMeaning": "xứng đáng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "earn (v)",
    "pronunciation": "/ɜːn/",
    "vietnameseMeaning": "kiếm",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "fame (n)",
    "pronunciation": "/feɪm/",
    "vietnameseMeaning": "sự nổi tiếng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "goal (n)",
    "pronunciation": "/ɡəʊl/",
    "vietnameseMeaning": "mục tiêu",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "impress (v)",
    "pronunciation": "/ɪmˈpres/",
    "vietnameseMeaning": "ấn tượng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "income (n)",
    "pronunciation": "/ˈɪŋ.kʌm/",
    "vietnameseMeaning": "thu nhập",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "industry (n)",
    "pronunciation": "/ˈɪn.də.stri/",
    "vietnameseMeaning": "công nghiệp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "interview (v,n)",
    "pronunciation": "/ˈɪn.tə.vjuː/",
    "vietnameseMeaning": "phỏng vấn",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "leader (n)",
    "pronunciation": "/ˈliː.dər/",
    "vietnameseMeaning": "người lãnh đạo",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "manager (n)",
    "pronunciation": "/ˈmæn.ɪ.dʒər/",
    "vietnameseMeaning": "người quản lý",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "pension (n)",
    "pronunciation": "/ˈpen.ʃən/",
    "vietnameseMeaning": "lương hưu",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "poverty (n)",
    "pronunciation": "/ˈpɒv.ə.ti/",
    "vietnameseMeaning": "sự nghèo đói",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "pressure (n)",
    "pronunciation": "/ˈpreʃ.ər/",
    "vietnameseMeaning": "áp lực",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "previous (adj)",
    "pronunciation": "/ˈpriː.vi.əs/",
    "vietnameseMeaning": "trước",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "profession(n)",
    "pronunciation": "/prəˈfeʃ.ən/",
    "vietnameseMeaning": "nghề nghiệp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "retire (n)",
    "pronunciation": "/rɪˈtaɪər/",
    "vietnameseMeaning": "nghỉ hưu",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "salary (n)",
    "pronunciation": "/ˈsæl.ər.i/",
    "vietnameseMeaning": "lương",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "staff (n)",
    "pronunciation": "/stɑːf/",
    "vietnameseMeaning": "nhân viên",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "strike (n)",
    "pronunciation": "/straɪk/",
    "vietnameseMeaning": "cuộc đình công",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "tax (v,n)",
    "pronunciation": "/tæks/",
    "vietnameseMeaning": "đánh thuế, thuế",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "wealthy (adj)",
    "pronunciation": "/ˈwel.θi/",
    "vietnameseMeaning": "giàu có",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "call off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "huỷ",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "give back (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "trả lại",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "go on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tiếp tục",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "put off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "hoãn",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "set up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tổ chức",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "stay up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thức khuya",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "take away (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "lấy đi",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "take over (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đảm nhiệm",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "in charge of",
    "pronunciation": "",
    "vietnameseMeaning": "đảm nhiệm",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "on business",
    "pronunciation": "",
    "vietnameseMeaning": "làm gì nhằm mục đích kinh doanh",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "on strike",
    "pronunciation": "",
    "vietnameseMeaning": "đình công",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "on time",
    "pronunciation": "",
    "vietnameseMeaning": "đúng giờ",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "on/off duty",
    "pronunciation": "",
    "vietnameseMeaning": "đang làm nhiệm vụ/ngoài nhiệm vụ",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "assist (v)",
    "pronunciation": "/əˈsɪst/",
    "vietnameseMeaning": "hỗ trợ",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "beg (v)",
    "pronunciation": "/beɡ/",
    "vietnameseMeaning": "cầu xin",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "boss (n)",
    "pronunciation": "/bɒs/",
    "vietnameseMeaning": "sếp",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "employ (v)",
    "pronunciation": "/ɪmˈplɔɪ/",
    "vietnameseMeaning": "thuê",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "fame (n)",
    "pronunciation": "/feɪm/",
    "vietnameseMeaning": "sự nổi tiếng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "occupy (v)",
    "pronunciation": "/ˈɒk.jə.paɪ/",
    "vietnameseMeaning": "chiếm",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "office (n)",
    "pronunciation": "/ˈɒf.ɪs/",
    "vietnameseMeaning": "văn phòng",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "retire (v)",
    "pronunciation": "/rɪˈtaɪər/",
    "vietnameseMeaning": "thuê",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "safe (adj)",
    "pronunciation": "/seɪf/",
    "vietnameseMeaning": "an toàn",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "succeed",
    "pronunciation": "/səkˈsiːd/",
    "vietnameseMeaning": "thành công",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "careful with",
    "pronunciation": "",
    "vietnameseMeaning": "cẩn thận",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "difficult for",
    "pronunciation": "",
    "vietnameseMeaning": "khó khăn",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "fed up with",
    "pronunciation": "",
    "vietnameseMeaning": "chán nản với cái gì",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "ready for",
    "pronunciation": "",
    "vietnameseMeaning": "sẵn sàng cho việc gì",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "responsible for",
    "pronunciation": "",
    "vietnameseMeaning": "chịu trách nhiệm cho",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "apply for (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đăng ký",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "depend on",
    "pronunciation": "",
    "vietnameseMeaning": "phụ thuộc vào",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "inform sb about",
    "pronunciation": "",
    "vietnameseMeaning": "thông tin cho ai về",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "refer to",
    "pronunciation": "",
    "vietnameseMeaning": "tham khảo",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "work as (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "làm việc với tư cách",
    "example": ""
  },
  {
    "unit": "Unit 27: Working And Earning",
    "englishWord": "work for (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "làm việc cho",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "affect (v)",
    "pronunciation": "/əˈfekt/",
    "vietnameseMeaning": "ảnh hưởng",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "balance (v,n)",
    "pronunciation": "/ˈbæl.əns/",
    "vietnameseMeaning": "cân bằng, sự cân bằng",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "benefit (v,n)",
    "pronunciation": "/ˈben.ɪ.fɪt/",
    "vietnameseMeaning": "lợi ích",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "breathe (v)",
    "pronunciation": "/briːð/",
    "vietnameseMeaning": "thở",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "chew (v)",
    "pronunciation": "/tʃuː/",
    "vietnameseMeaning": "nhai",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "chop (v)",
    "pronunciation": "/tʃɒp/",
    "vietnameseMeaning": "chặt",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "contain (v)",
    "pronunciation": "/kənˈteɪn/",
    "vietnameseMeaning": "chứa",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "cough (v,n)",
    "pronunciation": "/kɒf/",
    "vietnameseMeaning": "ho, cơn ho",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "cure (v,n)",
    "pronunciation": "/kjʊər/",
    "vietnameseMeaning": "chữa, phương pháp cứu chữa",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "exercise (v,n)",
    "pronunciation": "/ˈek.sə.saɪz/",
    "vietnameseMeaning": "tập thể dục, bài tập",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "flu (n)",
    "pronunciation": "/fluː/",
    "vietnameseMeaning": "cúm",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "have an operation (np)",
    "pronunciation": "",
    "vietnameseMeaning": "phẫu thuật",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "healthy (adj)",
    "pronunciation": "/ˈhel.θi/",
    "vietnameseMeaning": "lành mạnh, tốt cho sức khoẻ",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "ignore (v)",
    "pronunciation": "/ɪɡˈnɔːr/",
    "vietnameseMeaning": "thờ ơ",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "infection (n)",
    "pronunciation": "/ɪnˈfek.ʃən/",
    "vietnameseMeaning": "sự lây nhiễm",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "ingredient (n)",
    "pronunciation": "/ɪnˈɡriː.di.ənt/",
    "vietnameseMeaning": "nguyên liệu",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "injury (n)",
    "pronunciation": "/ˈɪn.dʒər.i/",
    "vietnameseMeaning": "vết thương, chấn thương",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "limit (v,n)",
    "pronunciation": "/ˈlɪm.ɪt/",
    "vietnameseMeaning": "giới hạn",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "pill (n)",
    "pronunciation": "/pɪl/",
    "vietnameseMeaning": "liều thuốc",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "recover (v)",
    "pronunciation": "/rɪˈkʌv.ər/",
    "vietnameseMeaning": "hồi phục",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "salty (adj)",
    "pronunciation": "/ˈsɒl.ti/",
    "vietnameseMeaning": "mặn",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "slice (v,n)",
    "pronunciation": "/slaɪs/",
    "vietnameseMeaning": "lát, miếng",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "sour (adj)",
    "pronunciation": "/saʊər/",
    "vietnameseMeaning": "chua",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "spicy(adj)",
    "pronunciation": "/ˈspaɪ.si/",
    "vietnameseMeaning": "cay",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "stir (v)",
    "pronunciation": "/stɜːr/",
    "vietnameseMeaning": "khuấy",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "suffer (v)",
    "pronunciation": "/ˈsʌf.ər/",
    "vietnameseMeaning": "chịu đựng",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "taste (v,n)",
    "pronunciation": "/teɪst/",
    "vietnameseMeaning": "nếm, mùi vị",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "treatment (n)",
    "pronunciation": "/ˈtriːt.mənt/",
    "vietnameseMeaning": "điều trị",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "vitamin (n)",
    "pronunciation": "/ˈvɪt.ə.mɪn/",
    "vietnameseMeaning": "vitamin",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "cut down (on)",
    "pronunciation": "",
    "vietnameseMeaning": "giảm",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "fall down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "ngã",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "get over (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "vượt qua",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "lie down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "nằm xuống",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "put on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "mặc",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "sit down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "ngồi xuống",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "stand up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đứng dậy",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "in addition (to)",
    "pronunciation": "",
    "vietnameseMeaning": "thêm vào",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "in comparison to/with",
    "pronunciation": "",
    "vietnameseMeaning": "so sánh với",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "in shape",
    "pronunciation": "",
    "vietnameseMeaning": "dáng đẹp",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "on a diet",
    "pronunciation": "",
    "vietnameseMeaning": "ăn kiêng",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "bake (v)",
    "pronunciation": "/beɪk/",
    "vietnameseMeaning": "nướng bánh",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "bend (v)",
    "pronunciation": "/bend/",
    "vietnameseMeaning": "bẻ",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "cook (v)",
    "pronunciation": "/kʊk/",
    "vietnameseMeaning": "nấu",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "intend (v)",
    "pronunciation": "/ɪnˈtend/",
    "vietnameseMeaning": "dự định",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "jog (v)",
    "pronunciation": "/dʒɒɡ/",
    "vietnameseMeaning": "đi bộ",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "medicine (n)",
    "pronunciation": "/ˈmed.ɪ.sən/",
    "vietnameseMeaning": "thuốc",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "pain (n)",
    "pronunciation": "/peɪn/",
    "vietnameseMeaning": "vết thương",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "reduce (v)",
    "pronunciation": "/rɪˈdʒuːs/",
    "vietnameseMeaning": "giảm",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "sense (v,n)",
    "pronunciation": "/sens/",
    "vietnameseMeaning": "giác quan",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "weigh (v)",
    "pronunciation": "/weɪ/",
    "vietnameseMeaning": "cân",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "addicted to (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "nghiện",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "allergic to (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "dị ứng với",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "covered in/with (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "được bao phủ trong/với",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "pleased with (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "hài lòng với",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "combine sth with",
    "pronunciation": "",
    "vietnameseMeaning": "kết hợp với",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "complain (to sb) about",
    "pronunciation": "",
    "vietnameseMeaning": "phàn nàn về",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "die of (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chết vì bệnh gì",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "fight against (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chiến đấu, chống lại cái gì",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "recover from",
    "pronunciation": "",
    "vietnameseMeaning": "hồi phục từ",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "smell of",
    "pronunciation": "",
    "vietnameseMeaning": "mùi của",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "a cure for",
    "pronunciation": "",
    "vietnameseMeaning": "phương pháp chữa cho",
    "example": ""
  },
  {
    "unit": "Unit 30: Body And Lifestyle",
    "englishWord": "a recipe for",
    "pronunciation": "",
    "vietnameseMeaning": "công thức nấu cho",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "ancient (adj)",
    "pronunciation": "/ˈeɪn.ʃənt/",
    "vietnameseMeaning": "cổ xưa",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "checked (adj)",
    "pronunciation": "/tʃekt/",
    "vietnameseMeaning": "đã kiểm tra",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "cotton (n)",
    "pronunciation": "/ˈkɒt.ən/",
    "vietnameseMeaning": "chất cotton",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "create (v)",
    "pronunciation": "/kriˈeɪt/",
    "vietnameseMeaning": "tạo nên",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "design (v,n)",
    "pronunciation": "/dɪˈzaɪn/",
    "vietnameseMeaning": "thiết kế",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "fix (v)",
    "pronunciation": "/fɪks/",
    "vietnameseMeaning": "sửa chữa",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "fold (v)",
    "pronunciation": "/fəʊld/",
    "vietnameseMeaning": "gập",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "gallery (n)",
    "pronunciation": "/ˈɡæl.ər.i/",
    "vietnameseMeaning": "phòng trưng bày",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "improvement (n)",
    "pronunciation": "/ɪmˈpruːv.mənt/",
    "vietnameseMeaning": "sự tiến bộ, sự cải tiến",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "loose (adj)",
    "pronunciation": "/luːs/",
    "vietnameseMeaning": "lỏng",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "maintain (v)",
    "pronunciation": "/meɪnˈteɪn/",
    "vietnameseMeaning": "duy trì",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "match (v)",
    "pronunciation": "/mætʃ/",
    "vietnameseMeaning": "nối, phù hợp",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "material (n)",
    "pronunciation": "/məˈtɪə.ri.əl/",
    "vietnameseMeaning": "chất liệu",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "notice (v,n)",
    "pronunciation": "/ˈnəʊ.tɪs/",
    "vietnameseMeaning": "thông báo",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "pattern (n)",
    "pronunciation": "/ˈpæt.ən/",
    "vietnameseMeaning": "mẫu",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "pile (n)",
    "pronunciation": "/paɪl/",
    "vietnameseMeaning": "Đóng cọc",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "practical (adj)",
    "pronunciation": "/ˈpræk.tɪ.kəl/",
    "vietnameseMeaning": "thực tế",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "rough (adj)",
    "pronunciation": "/rʌf/",
    "vietnameseMeaning": "thô",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "shape (n)",
    "pronunciation": "/ʃeɪp/",
    "vietnameseMeaning": "hình dạng",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "silk (n)",
    "pronunciation": "/sɪlk/",
    "vietnameseMeaning": "lụa",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "sleeve (n)",
    "pronunciation": "/sliːv/",
    "vietnameseMeaning": "ống tay",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "smooth (adj)",
    "pronunciation": "/smuːð/",
    "vietnameseMeaning": "trôi chảy, bằng phẳng",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "stretch (v)",
    "pronunciation": "/stretʃ/",
    "vietnameseMeaning": "kéo dài",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "stripped (adj)",
    "pronunciation": "/strɪpt/",
    "vietnameseMeaning": "tước",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "style (n)",
    "pronunciation": "/staɪl/",
    "vietnameseMeaning": "phong cách",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "suit (v,n)",
    "pronunciation": "/suːt/",
    "vietnameseMeaning": "hợp, bộ com lê",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "suitable (adj)",
    "pronunciation": "/ˈsuː.tə.bəl/",
    "vietnameseMeaning": "phù hợp",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "tear (v,n)",
    "pronunciation": "/teər/",
    "vietnameseMeaning": "khóc, nước mắt",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "tight (adj)",
    "pronunciation": "/taɪt/",
    "vietnameseMeaning": "chặt",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "tool (n)",
    "pronunciation": "/tuːl/",
    "vietnameseMeaning": "dụng cụ",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "cut off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "cắt",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "do off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "Làm mất",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "fill up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "lấp đầy",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "have sth on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "mặc cái gì",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "leave out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "bỏ đi",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "put on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "mặc",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "take off (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "cởi, cất cánh, thành công",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "try on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thử",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "at the back (of) (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "mặt sau của",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "at the end (of) (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "cuối của",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "in fashion/style (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "hợp thời trang",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "in front (of) (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "phía trước",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "in the corner (of) (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "ở góc của",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "out of fashion/style (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "lỗi mốt",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "art (n)",
    "pronunciation": "/ɑːt/",
    "vietnameseMeaning": "nghệ thuật",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "break (v)",
    "pronunciation": "/breɪk/",
    "vietnameseMeaning": "đập vỡ",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "compose (v)",
    "pronunciation": "/kəmˈpəʊz/",
    "vietnameseMeaning": "soạn, biên soạn",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "exhibit (v)",
    "pronunciation": "/ɪɡˈzɪb.ɪt/",
    "vietnameseMeaning": "triển lãm",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "free (adj)",
    "pronunciation": "/friː/",
    "vietnameseMeaning": "rảnh, tự do",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "hand (v,n)",
    "pronunciation": "/hænd/",
    "vietnameseMeaning": "tay",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "imagine (v)",
    "pronunciation": "/ɪˈmædʒ.ɪn/",
    "vietnameseMeaning": "tưởng tượng",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "intelligent (adj)",
    "pronunciation": "/ɪnˈtel.ɪ.dʒənt/",
    "vietnameseMeaning": "thông minh",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "perfect (adj)",
    "pronunciation": "/ˈpɜː.fekt/",
    "vietnameseMeaning": "hoàn hảo",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "prepare (v)",
    "pronunciation": "/prɪˈpeər/",
    "vietnameseMeaning": "chuẩn bị",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "amazed at/with",
    "pronunciation": "",
    "vietnameseMeaning": "ngạc nhiên về/với",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "disappointed with",
    "pronunciation": "",
    "vietnameseMeaning": "thất vọng với",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "familiar with",
    "pronunciation": "",
    "vietnameseMeaning": "quen thuộc với",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "involved in",
    "pronunciation": "",
    "vietnameseMeaning": "liên quan đến",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "similar to",
    "pronunciation": "",
    "vietnameseMeaning": "giống",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "change sth (from sth) into",
    "pronunciation": "",
    "vietnameseMeaning": "thay đổi cái gì thành cái gì",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "describe sth as",
    "pronunciation": "",
    "vietnameseMeaning": "mô tả",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "explain sth to",
    "pronunciation": "",
    "vietnameseMeaning": "giải thích",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "remind sb of",
    "pronunciation": "",
    "vietnameseMeaning": "nhắc nhớ ai",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "remove sth from",
    "pronunciation": "",
    "vietnameseMeaning": "loại bỏ từ",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "an influence on",
    "pronunciation": "",
    "vietnameseMeaning": "ảnh hưởng",
    "example": ""
  },
  {
    "unit": "Unit 33: Creating And Building",
    "englishWord": "a picture of",
    "pronunciation": "",
    "vietnameseMeaning": "toàn cảnh của",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "amazing (adj)",
    "pronunciation": "/əˈmeɪ.zɪŋ/",
    "vietnameseMeaning": "tuyệt vời",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "climate (n)",
    "pronunciation": "/ˈklaɪ.mət/",
    "vietnameseMeaning": "khí hậu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "countryside (n)",
    "pronunciation": "/ˈkʌn.tri.saɪd/",
    "vietnameseMeaning": "miền quê",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "environment (n)",
    "pronunciation": "/ɪnˈvaɪ.rən.mənt/",
    "vietnameseMeaning": "môi trường",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "extinct (adj)",
    "pronunciation": "/ɪkˈstɪŋkt/",
    "vietnameseMeaning": "tuyệt chủng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "forecast (v,n)",
    "pronunciation": "/ˈfɔː.kɑːst/",
    "vietnameseMeaning": "dự báo",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "freezing (adj)",
    "pronunciation": "/ˈfriː.zɪŋ/",
    "vietnameseMeaning": "đóng băng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "global (adj)",
    "pronunciation": "/ˈɡləʊ.bəl/",
    "vietnameseMeaning": "toàn cầu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "heatwave (n)",
    "pronunciation": "/ˈhiːtˌweɪv/",
    "vietnameseMeaning": "đợt nắng nóng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "insect (n)",
    "pronunciation": "/ˈɪn.sekt/",
    "vietnameseMeaning": "côn trùng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "lightning (n)",
    "pronunciation": "/ˈlaɪt.nɪŋ/",
    "vietnameseMeaning": "chớp",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "litter (v,n)",
    "pronunciation": "/ˈlɪt.ər/",
    "vietnameseMeaning": "đổ rác / rác",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "local (adj)",
    "pronunciation": "/ˈləʊ.kəl/",
    "vietnameseMeaning": "địa phương",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "locate (v)",
    "pronunciation": "/ləʊˈkeɪt/",
    "vietnameseMeaning": "định vị",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "mammal (n)",
    "pronunciation": "/ˈmæm.əl/",
    "vietnameseMeaning": "động vật có vú",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "mild (adj)",
    "pronunciation": "/maɪld/",
    "vietnameseMeaning": "nhẹ",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "name (v,n)",
    "pronunciation": "/neɪm/",
    "vietnameseMeaning": "tên",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "origin (n)",
    "pronunciation": "/ˈɒr.ɪ.dʒɪn/",
    "vietnameseMeaning": "nguồn gốc",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "planet (n)",
    "pronunciation": "/ˈplæn.ɪt/",
    "vietnameseMeaning": "hành tinh",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "preserve (v)",
    "pronunciation": "/prɪˈzɜːv/",
    "vietnameseMeaning": "bảo tồn",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "recycle (v)",
    "pronunciation": "/ˌriːˈsaɪ.kəl/",
    "vietnameseMeaning": "tái chế",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "reptile (n)",
    "pronunciation": "/ˈrep.taɪl/",
    "vietnameseMeaning": "loài bò sát",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "rescue (v,n)",
    "pronunciation": "/ˈres.kjuː/",
    "vietnameseMeaning": "cứu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "satellite (n)",
    "pronunciation": "/ˈsæt.əl.aɪt/",
    "vietnameseMeaning": "vệ tinh",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "shower (n)",
    "pronunciation": "/ʃaʊər/",
    "vietnameseMeaning": "vòi sen",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "solar system (np)",
    "pronunciation": "/ˈsəʊ.lə ˌsɪs.təm/",
    "vietnameseMeaning": "hệ mặt trời",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "species (n)",
    "pronunciation": "/ˈspiː.ʃiːz/",
    "vietnameseMeaning": "loài",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "thunder (n)",
    "pronunciation": "/ˈθʌn.dər/",
    "vietnameseMeaning": "sấm",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "wild (adj)",
    "pronunciation": "/waɪld/",
    "vietnameseMeaning": "hoang dã",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "wildlife (n)",
    "pronunciation": "/ˈwaɪld.laɪf/",
    "vietnameseMeaning": "thế giới hoang dã",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "blow up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "thổi bay",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "build up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "xây dựng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "clear up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "dọn sạch",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "go out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đi ra ngoài",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "keep out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tránh xa",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "put down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đặt xuống",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "put out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "dập tắt",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "put up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "chịu đựng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "at most (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "nhất",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "at the bottom/top of (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "ở cuối/đầu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "in the beginning (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "ở lúc bắt đầu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "in the distance (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "xa",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "in total (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "tổng",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "on top (of) (prep p)",
    "pronunciation": "",
    "vietnameseMeaning": "ở đỉnh",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "centre (n)",
    "pronunciation": "/ˈsen.tər/",
    "vietnameseMeaning": "trung tâm",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "circle (n)",
    "pronunciation": "/ˈsɜː.kəl/",
    "vietnameseMeaning": "vòng tròn",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "danger (n)",
    "pronunciation": "/ˈdeɪn.dʒər/",
    "vietnameseMeaning": "nguy hiểm",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "deep (adj)",
    "pronunciation": "/diːp/",
    "vietnameseMeaning": "sâu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "destroy (v)",
    "pronunciation": "/dɪˈstrɔɪ/",
    "vietnameseMeaning": "phá huỷ",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "fog (n)",
    "pronunciation": "/fɒɡ/",
    "vietnameseMeaning": "sương mù",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "garden (n)",
    "pronunciation": "/ˈɡɑː.dən/",
    "vietnameseMeaning": "vườn",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "invade (v)",
    "pronunciation": "/ɪnˈveɪd/",
    "vietnameseMeaning": "xâm chiếm",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "nature (n)",
    "pronunciation": "/ˈneɪ.tʃər/",
    "vietnameseMeaning": "tự nhiên",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "pollute (v)",
    "pronunciation": "/pəˈluːt/",
    "vietnameseMeaning": "ô nhiễm",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "afraid of",
    "pronunciation": "",
    "vietnameseMeaning": "sợ",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "aware of",
    "pronunciation": "",
    "vietnameseMeaning": "nhận biết",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "enthusiastic about",
    "pronunciation": "",
    "vietnameseMeaning": "nhiệt huyết làm gì",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "serious about",
    "pronunciation": "",
    "vietnameseMeaning": "nghiêm trọng, nghiêm túc",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "short of",
    "pronunciation": "",
    "vietnameseMeaning": "thiếu",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "escape from",
    "pronunciation": "",
    "vietnameseMeaning": "thoát khỏi",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "prevent from",
    "pronunciation": "",
    "vietnameseMeaning": "ngăn chặn",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "save sth from",
    "pronunciation": "",
    "vietnameseMeaning": "cứu cái gì khỏi",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "think about",
    "pronunciation": "",
    "vietnameseMeaning": "suy nghĩ về",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "worry about",
    "pronunciation": "",
    "vietnameseMeaning": "lo lắng về",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "damage to",
    "pronunciation": "",
    "vietnameseMeaning": "phá huỷ",
    "example": ""
  },
  {
    "unit": "Unit 36: Nature And The Universe",
    "englishWord": "an increase in",
    "pronunciation": "",
    "vietnameseMeaning": "tăng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "amusing (adj)",
    "pronunciation": "/əˈmjuː.zɪŋ/",
    "vietnameseMeaning": "gây tiếng cười/ hài hước",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "annoy (v)",
    "pronunciation": "/əˈnɔɪ/",
    "vietnameseMeaning": "làm ai khó chịu",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "attitude (n)",
    "pronunciation": "/ˈæt.ɪ.tʃuːd/",
    "vietnameseMeaning": "thái độ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "bad-tempered (adj)",
    "pronunciation": "/ˌbædˈtemp.əd/",
    "vietnameseMeaning": "nóng nảy",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "behave (v)",
    "pronunciation": "/bɪˈheɪv/",
    "vietnameseMeaning": "cư xử",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "bully (v,n)",
    "pronunciation": "/ˈbʊl.i/",
    "vietnameseMeaning": "bắt nạt",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "calm (adj)",
    "pronunciation": "/kɑːm/",
    "vietnameseMeaning": "bình tĩnh",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "celebrate (v)",
    "pronunciation": "/ˈsel.ə.breɪt/",
    "vietnameseMeaning": "tổ chức",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "character (n)",
    "pronunciation": "/ˈkær.ək.tər/",
    "vietnameseMeaning": "nhân vật",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "depressed (adj)",
    "pronunciation": "/dɪˈprest/",
    "vietnameseMeaning": "tuyệt vọng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "embarrassing (n)",
    "pronunciation": "/ɪmˈbær.ə.sɪŋ/",
    "vietnameseMeaning": "xấu hổ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "emotion (n)",
    "pronunciation": "/ɪˈməʊ.ʃən/",
    "vietnameseMeaning": "cảm xúc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "enthusiastic (adj)",
    "pronunciation": "/ɪnˈθjuː.zi.æz.əm/",
    "vietnameseMeaning": "nhiệt huyết, nhiệt tình",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "feeling (n)",
    "pronunciation": "/ˈfiː.lɪŋ/",
    "vietnameseMeaning": "cảm xúc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "glad (adj)",
    "pronunciation": "/ɡlæd/",
    "vietnameseMeaning": "vui",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "hurt (v,adj)",
    "pronunciation": "/hɜːt/",
    "vietnameseMeaning": "đau",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "miserable (adj)",
    "pronunciation": "/ˈmɪz.ər.ə.bəl/",
    "vietnameseMeaning": "đau khổ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "naughty (adj)",
    "pronunciation": "/ˈnɔː.ti/",
    "vietnameseMeaning": "nghịch ngợm",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "noisy (adj)",
    "pronunciation": "/ˈnɔɪ.zi/",
    "vietnameseMeaning": "ồn ào",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "polite (adj)",
    "pronunciation": "/pəˈlaɪt/",
    "vietnameseMeaning": "lịch sự",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "react (v)",
    "pronunciation": "/riˈækt/",
    "vietnameseMeaning": "phản ứng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "regret (v)",
    "pronunciation": "/rɪˈɡret/",
    "vietnameseMeaning": "tiếc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "ridiculous (adj)",
    "pronunciation": "/rɪˈdɪk.jə.ləs/",
    "vietnameseMeaning": "nực cười",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "romantic (adj)",
    "pronunciation": "/rəʊˈmæn.tɪk/",
    "vietnameseMeaning": "lãng mạn",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "rude (adj)",
    "pronunciation": "/ruːd/",
    "vietnameseMeaning": "thô lỗ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "sense of humor (np)",
    "pronunciation": "",
    "vietnameseMeaning": "hài hước",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "shy (adj)",
    "pronunciation": "/ʃaɪ/",
    "vietnameseMeaning": "ngại ngùng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "stressed (adj)",
    "pronunciation": "/strest/",
    "vietnameseMeaning": "áp lực",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "tell a joke (v phr)",
    "pronunciation": "",
    "vietnameseMeaning": "đùa",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "upset (v,adj)",
    "pronunciation": "",
    "vietnameseMeaning": "buồn bã",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "calm down (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "bình tĩnh",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "cheer up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "Cổ vũ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "come on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "cố lên",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "go on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tiếp tục",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "hang on (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "treo lên",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "run away from (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "run away from",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "shut up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "câm miệng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "speak up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "phát biểu",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "at first (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "lúc đầu",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "at least (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "ít nhất",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "at times (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "đôi khi",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "in secret (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "bí mật",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "in spite of (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "mặc dù",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "in tears (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "trong nước mắt",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "bore (n)",
    "pronunciation": "/bɔːr/",
    "vietnameseMeaning": "sự chán",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "comedy (n)",
    "pronunciation": "/ˈkɒm.ə.di/",
    "vietnameseMeaning": "hài",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "emotion (n)",
    "pronunciation": "/ɪˈməʊ.ʃən/",
    "vietnameseMeaning": "cảm xúc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "energy (n)",
    "pronunciation": "/ˈen.ə.dʒi/",
    "vietnameseMeaning": "năng lượng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "excite (n)",
    "pronunciation": "/ɪkˈsaɪt/",
    "vietnameseMeaning": "kích động",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "feel (v)",
    "pronunciation": "/fiːl/",
    "vietnameseMeaning": "cảm thấy",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "happy (adj)",
    "pronunciation": "/ˈhæp.i/",
    "vietnameseMeaning": "hạnh phúc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "hate (v)",
    "pronunciation": "/heɪt/",
    "vietnameseMeaning": "ghét",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "noise (n)",
    "pronunciation": "/nɔɪz/",
    "vietnameseMeaning": "tiếng ồn",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "sympathy (n)",
    "pronunciation": "/ˈsɪm.pə.θi/",
    "vietnameseMeaning": "sự cảm thông",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "ashamed of",
    "pronunciation": "",
    "vietnameseMeaning": "xấu hổ về",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "embarrassed about",
    "pronunciation": "",
    "vietnameseMeaning": "xấu hổ về",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "frightened of",
    "pronunciation": "",
    "vietnameseMeaning": "sợ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "happy about/with",
    "pronunciation": "",
    "vietnameseMeaning": "hạnh phúc",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "nervous about",
    "pronunciation": "",
    "vietnameseMeaning": "lo lắng",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "scared of",
    "pronunciation": "",
    "vietnameseMeaning": "sợ",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "sorry about /for",
    "pronunciation": "",
    "vietnameseMeaning": "có lỗi",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "surprised at/by",
    "pronunciation": "",
    "vietnameseMeaning": "ngạc nhiên",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "tired of",
    "pronunciation": "",
    "vietnameseMeaning": "mệt mỏi",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "congratulate sb on",
    "pronunciation": "",
    "vietnameseMeaning": "chúc mừng ai đó về",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "laugh at",
    "pronunciation": "",
    "vietnameseMeaning": "cười",
    "example": ""
  },
  {
    "unit": "Unit 39: Laughing And Crying",
    "englishWord": "a joke about",
    "pronunciation": "",
    "vietnameseMeaning": "câu đùa về",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "accident (n)",
    "pronunciation": "/ˈæk.sɪ.dənt/",
    "vietnameseMeaning": "tai nạn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "assume (v)",
    "pronunciation": "/əˈsjuːm/",
    "vietnameseMeaning": "cho rằng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "cause (v,n)",
    "pronunciation": "/kɔːz/",
    "vietnameseMeaning": "gây ra",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "claim (v)",
    "pronunciation": "/kleɪm/",
    "vietnameseMeaning": "khẳng định",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "complain (v)",
    "pronunciation": "/kəmˈpleɪn/",
    "vietnameseMeaning": "phàn nàn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "convince (v)",
    "pronunciation": "/kənˈvɪns/",
    "vietnameseMeaning": "thuyết phục",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "criticise (v)",
    "pronunciation": "/ˈkrɪt.ɪ.saɪz/",
    "vietnameseMeaning": "chỉ trích",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "deny (v)",
    "pronunciation": "/dɪˈnaɪ/",
    "vietnameseMeaning": "phủ nhận",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "discussion (n)",
    "pronunciation": "/dɪˈskʌʃ.ən/",
    "vietnameseMeaning": "cuộc thảo luận",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "doubt (v,n)",
    "pronunciation": "/daʊt/",
    "vietnameseMeaning": "nghi ngờ",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "encourage (v)",
    "pronunciation": "/ɪnˈkʌr.ɪdʒ/",
    "vietnameseMeaning": "khuyến khích",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "get rid of (vp)",
    "pronunciation": "",
    "vietnameseMeaning": "loại bỏ",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "gossip (v,n)",
    "pronunciation": "/ˈɡɒs.ɪp/",
    "vietnameseMeaning": "tin đồn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "ideal (adj)",
    "pronunciation": "/aɪˈdɪəl/",
    "vietnameseMeaning": "lý tưởng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "insult (v)",
    "pronunciation": "/ˈɪn.sʌlt/",
    "vietnameseMeaning": "sỉ nhục",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "investigate (v)",
    "pronunciation": "/ɪnˈves.tɪ.ɡeɪt/",
    "vietnameseMeaning": "nghiên cứu",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "negative (adj)",
    "pronunciation": "/ˈneɡ.ə.tɪv/",
    "vietnameseMeaning": "tiêu cực",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "positive (adj)",
    "pronunciation": "/ˈpɒz.ə.tɪv/",
    "vietnameseMeaning": "tích cực",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "praise (v,n)",
    "pronunciation": "/preɪz/",
    "vietnameseMeaning": "khen ngợi",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "pretend (v)",
    "pronunciation": "/prɪˈtend/",
    "vietnameseMeaning": "giả vờ",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "purpose (n)",
    "pronunciation": "/ˈpɜː.pəs/",
    "vietnameseMeaning": "mục đích",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "refuse (v)",
    "pronunciation": "/rɪˈfjuːz/",
    "vietnameseMeaning": "từ chối",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "result (v,n)",
    "pronunciation": "/rɪˈzʌlt/",
    "vietnameseMeaning": "kết quả",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "rumor (n)",
    "pronunciation": "/ˈruː.mɚ/",
    "vietnameseMeaning": "tin đồn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "sensible (adj)",
    "pronunciation": "/ˈsen.sə.bəl/",
    "vietnameseMeaning": "nhạy cảm",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "serious (adj)",
    "pronunciation": "/ˈsɪə.ri.əs/",
    "vietnameseMeaning": "nghiêm trọng, nghiêm túc",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "spare (adj)",
    "pronunciation": "/speər/",
    "vietnameseMeaning": "dự phòng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "theory (n)",
    "pronunciation": "/ˈθɪə.ri/",
    "vietnameseMeaning": "lý thuyết",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "though",
    "pronunciation": "/ðəʊ/",
    "vietnameseMeaning": "mặc dù",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "warn (v)",
    "pronunciation": "/wɔːn/",
    "vietnameseMeaning": "cảnh báo",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "hang up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "treo",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "pick up (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "đón, nhặt cái gì",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "put back (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "để lại chỗ cũ",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "run out (of) (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "hết",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "share out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "coi chừng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "sort out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "phân loại",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "watch out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "coi chừng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "work out (pv)",
    "pronunciation": "",
    "vietnameseMeaning": "tập thể dục",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "by accident/mistake (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "tình cờ, vô tình",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "in a mess (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "trong một mớ hỗn độn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "in danger (of) (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "gặp nguy hiểm",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "in my view (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "theo quan điểm của tôi",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "in trouble (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "gặp rắc rối",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "under pressure (prep phr)",
    "pronunciation": "",
    "vietnameseMeaning": "chịu áp lực",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "advise (v)",
    "pronunciation": "/ədˈvaɪz/",
    "vietnameseMeaning": "khuyên",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "confuse (v)",
    "pronunciation": "/kənˈfjuːz/",
    "vietnameseMeaning": "bối rối",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "except (v)",
    "pronunciation": "/ɪkˈsept/",
    "vietnameseMeaning": "ngoại trừ",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "help (v)",
    "pronunciation": "/help/",
    "vietnameseMeaning": "giúp",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "luck (n)",
    "pronunciation": "/lʌk/",
    "vietnameseMeaning": "may mắn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "prefer (v)",
    "pronunciation": "/prɪˈfɜːr/",
    "vietnameseMeaning": "thích hơn",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "recommend (v)",
    "pronunciation": "/ˌrek.əˈmend/",
    "vietnameseMeaning": "gợi ý",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "refuse (v)",
    "pronunciation": "/rɪˈfjuːz/",
    "vietnameseMeaning": "tái sử dụng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "solve (v)",
    "pronunciation": "/sɒlv/",
    "vietnameseMeaning": "giải quyết",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "suggest (v)",
    "pronunciation": "/səˈdʒest/",
    "vietnameseMeaning": "gợi ý",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "sure about/of",
    "pronunciation": "",
    "vietnameseMeaning": "chắc chắn về",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "advise against",
    "pronunciation": "",
    "vietnameseMeaning": "khuyên không nên làm gì",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "agree (with sb) about",
    "pronunciation": "",
    "vietnameseMeaning": "đồng ý với ai về",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "approve of",
    "pronunciation": "",
    "vietnameseMeaning": "đồng ý",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "believe in",
    "pronunciation": "",
    "vietnameseMeaning": "tin tưởng",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "deal with",
    "pronunciation": "",
    "vietnameseMeaning": "giải quyết",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "happen to",
    "pronunciation": "",
    "vietnameseMeaning": "xảy ra",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "hide sth from sb",
    "pronunciation": "",
    "vietnameseMeaning": "che dấu ai điều gì",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "insist on",
    "pronunciation": "",
    "vietnameseMeaning": "khăng khăng làm gì",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "rely on",
    "pronunciation": "",
    "vietnameseMeaning": "phụ thuộc vào",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "an advantage of",
    "pronunciation": "",
    "vietnameseMeaning": "lợi ích của",
    "example": ""
  },
  {
    "unit": "Unit 42: Problems And Solutions",
    "englishWord": "a solution to",
    "pronunciation": "",
    "vietnameseMeaning": "giải pháp cho",
    "example": ""
  }
];

const unitSelect = document.getElementById("unitSelect");
const totalWords = document.getElementById("totalWords");
const unitCount = document.getElementById("unitCount");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const flashcardModeBtn = document.getElementById("flashcardModeBtn");
const typingModeBtn = document.getElementById("typingModeBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const flashcardSection = document.getElementById("flashcardSection");
const typingSection = document.getElementById("typingSection");

const flashcard = document.getElementById("flashcard");
const flashUnitName = document.getElementById("flashUnitName");
const englishWord = document.getElementById("englishWord");
const pronunciation = document.getElementById("pronunciation");
const vietnameseMeaning = document.getElementById("vietnameseMeaning");
const exampleText = document.getElementById("exampleText");
const exampleMeaningText = document.getElementById("exampleMeaningText");
const speakBtn = document.getElementById("speakBtn");
const speakExampleBtn = document.getElementById("speakExampleBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const typingUnitName = document.getElementById("typingUnitName");
const typingMeaning = document.getElementById("typingMeaning");
const typingPosition = document.getElementById("typingPosition");
const typingInput = document.getElementById("typingInput");
const checkBtn = document.getElementById("checkBtn");
const typingFeedback = document.getElementById("typingFeedback");
const typingExampleBox = document.getElementById("typingExampleBox");
const typingExampleText = document.getElementById("typingExampleText");
const typingExampleMeaning = document.getElementById("typingExampleMeaning");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const autoNextBtn = document.getElementById("autoNextBtn");
const typingPrevBtn = document.getElementById("typingPrevBtn");
const typingNextBtn = document.getElementById("typingNextBtn");
const listPanel = document.getElementById("listPanel");
const wordList = document.getElementById("wordList");

let currentUnitWords = [];
let currentIndex = 0;
let currentMode = "flashcard";
let autoNextEnabled = localStorage.getItem("typingAutoNextEnabled") === "true";
let autoNextTimer = null;

/**
 * Loại bỏ chú thích loại từ ở cuối như: (v), (n), (adj), (pv)...
 * Dùng cho phần phát âm và kiểm tra nhập từ để người học không cần gõ phần loại từ.
 */
function getBaseWord(word) {
  return word
    .replace(/<[^>]*>/g, " ")
    .replace(/\s*\([^)]*\)\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Chuẩn hóa câu trả lời trước khi so sánh.
 * Hàm này giúp bỏ qua khác biệt hoa/thường và khoảng trắng thừa.
 */
function normalizeAnswer(text) {
  return text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Một số dòng trong dữ liệu có dạng "A = B".
 * Hàm này tạo danh sách đáp án hợp lệ để người dùng nhập A hoặc B đều được chấp nhận.
 */
function getAcceptedAnswers(word) {
  const baseWord = getBaseWord(word);
  const rawWord = word.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  return [...new Set([
    baseWord,
    rawWord,
    ...baseWord.split("="),
    ...rawWord.split("=")
  ].map(answer => normalizeAnswer(answer)).filter(Boolean))];
}


/**
 * Lấy từ/ cụm từ sạch hơn để đưa vào câu ví dụ.
 * Một số dữ liệu có ký hiệu sb/sth/V-ing, hàm này đổi sang dạng dễ đọc hơn.
 */
function getExampleKeyword(word) {
  return getBaseWord(word)
    .split("=")[0]
    .replace(/\bor\b.*$/i, "")
    .replace(/\bsb\b/gi, "someone")
    .replace(/\bsth\b|\bsmth\b/gi, "something")
    .replace(/\bV-ing\b/gi, "doing something")
    .replace(/\bto V\b/gi, "to do something")
    .replace(/\bV\b/g, "do something")
    .replace(/\bN\b/g, "something")
    .replace(/\s*\/\s*/g, " or ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Trả về chủ đề tiếng Anh ngắn theo từng Unit để tạo ví dụ dự phòng.
 */
function getUnitTopic(unit) {
  const unitNumber = unit.match(/Unit\s+(\d+)/i)?.[1];
  const topics = {
    "03": "games, music, and entertainment",
    "06": "learning and studying",
    "09": "travel and transport",
    "12": "friends and relationships",
    "15": "buying and selling",
    "18": "technology and discoveries",
    "21": "communication",
    "24": "people and daily life",
    "27": "work and careers",
    "30": "health and lifestyle",
    "33": "creating and building",
    "36": "nature and the universe",
    "39": "feelings and behaviour",
    "42": "problems and solutions"
  };

  return topics[unitNumber] || "everyday English";
}

/**
 * Dữ liệu gốc của bạn chưa có câu ví dụ, nên app sẽ tự tạo ví dụ mẫu.
 * Khi bạn tự điền item.example hoặc item.exampleMeaning trong vocabularyData,
 * app sẽ ưu tiên hiển thị ví dụ bạn nhập thay vì ví dụ tự động.
 */
function getExampleData(item) {
  const keyword = getExampleKeyword(item.englishWord) || "this word";
  const topic = getUnitTopic(item.unit);
  const englishExample = item.example?.trim()
    || `I can use “${keyword}” when I talk about ${topic}.`;
  const vietnameseExample = item.exampleMeaning?.trim()
    || `Tôi có thể dùng “${keyword}” khi nói về ${topic}; nghĩa cần nhớ: ${item.vietnameseMeaning}.`;

  return {
    english: englishExample,
    vietnamese: vietnameseExample
  };
}

/**
 * Tạo dropdown Unit tự động từ dữ liệu.
 */
function renderUnits() {
  const units = [...new Set(vocabularyData.map(item => item.unit))];

  unitSelect.innerHTML = units
    .map(unit => `<option value="${unit}">${unit}</option>`)
    .join("");

  const savedUnit = localStorage.getItem("selectedVocabularyUnit");
  if (savedUnit && units.includes(savedUnit)) {
    unitSelect.value = savedUnit;
  }
}

/**
 * Lọc từ vựng theo Unit đang chọn và reset tiến trình học.
 */
function loadUnit(unit) {
  currentUnitWords = vocabularyData.filter(item => item.unit === unit);
  currentIndex = 0;
  localStorage.setItem("selectedVocabularyUnit", unit);
  renderCurrentWord();
  renderWordList();
}

/**
 * Render từ hiện tại cho cả flashcard và typing test.
 */
function renderCurrentWord() {
  if (!currentUnitWords.length) return;

  const word = currentUnitWords[currentIndex];
  flashcard.classList.remove("flipped");

  flashUnitName.textContent = word.unit;
  englishWord.textContent = word.englishWord;
  pronunciation.textContent = word.pronunciation || "Chưa có phiên âm";
  vietnameseMeaning.textContent = word.vietnameseMeaning;

  const example = getExampleData(word);
  exampleText.textContent = example.english;
  exampleMeaningText.textContent = example.vietnamese;
  typingExampleText.textContent = example.english;
  typingExampleMeaning.textContent = example.vietnamese;

  typingUnitName.textContent = word.unit;
  typingPosition.textContent = `Từ ${currentIndex + 1}/${currentUnitWords.length}`;
  typingMeaning.textContent = word.vietnameseMeaning;
  typingInput.value = "";
  resetTypingState();

  updateProgress();
  highlightActiveWord();
}

function updateProgress() {
  const total = currentUnitWords.length;
  const current = total ? currentIndex + 1 : 0;
  const percent = total ? (current / total) * 100 : 0;

  totalWords.textContent = vocabularyData.length;
  unitCount.textContent = `${total} từ`;
  progressText.textContent = `${current}/${total}`;
  progressBar.style.width = `${percent}%`;
}

function nextWord() {
  if (!currentUnitWords.length) return;
  currentIndex = (currentIndex + 1) % currentUnitWords.length;
  renderCurrentWord();
}

function prevWord() {
  if (!currentUnitWords.length) return;
  currentIndex = (currentIndex - 1 + currentUnitWords.length) % currentUnitWords.length;
  renderCurrentWord();
}

/**
 * Phát âm bằng Web Speech API có sẵn trên trình duyệt.
 */
function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt của bạn chưa hỗ trợ Web Speech API.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function speakCurrentWord() {
  const word = currentUnitWords[currentIndex];
  const textToSpeak = getExampleKeyword(word.englishWord);
  speakText(textToSpeak);
}

function speakCurrentExample() {
  const word = currentUnitWords[currentIndex];
  const example = getExampleData(word);
  speakText(example.english);
}

function switchMode(mode) {
  currentMode = mode;
  const isFlashcard = mode === "flashcard";

  flashcardSection.classList.toggle("hidden", !isFlashcard);
  typingSection.classList.toggle("hidden", isFlashcard);
  listPanel.classList.toggle("hidden", !isFlashcard);
  flashcardModeBtn.classList.toggle("active", isFlashcard);
  typingModeBtn.classList.toggle("active", !isFlashcard);

  resetTypingState();
  if (!isFlashcard) typingInput.focus();
}

function clearAutoNextTimer() {
  if (!autoNextTimer) return;
  clearTimeout(autoNextTimer);
  autoNextTimer = null;
}

function updateAutoNextButton() {
  autoNextBtn.textContent = autoNextEnabled ? "Auto chuyển: Bật" : "Auto chuyển: Tắt";
  autoNextBtn.classList.toggle("active", autoNextEnabled);
  autoNextBtn.setAttribute("aria-pressed", String(autoNextEnabled));
}

function toggleAutoNext() {
  autoNextEnabled = !autoNextEnabled;
  localStorage.setItem("typingAutoNextEnabled", String(autoNextEnabled));
  clearAutoNextTimer();
  updateAutoNextButton();

  if (currentMode === "typing") {
    typingInput.focus();
  }
}

function resetTypingState() {
  clearAutoNextTimer();
  typingInput.classList.remove("correct", "wrong");
  typingFeedback.textContent = "";
  typingFeedback.className = "feedback";
  typingExampleBox.classList.add("hidden");
}

/**
 * Kiểm tra câu trả lời trong Typing Test.
 * Nếu nhập đúng, input chuyển xanh.
 * Khi bật Auto, app đợi 2 giây rồi tự chuyển sang từ tiếp theo.
 */
function checkTypingAnswer() {
  const word = currentUnitWords[currentIndex];
  const userAnswer = normalizeAnswer(typingInput.value);
  const acceptedAnswers = getAcceptedAnswers(word.englishWord);

  resetTypingState();

  if (!userAnswer) return;

  const isCorrect = acceptedAnswers.includes(userAnswer);
  const isPossiblePrefix = acceptedAnswers.some(answer => answer.startsWith(userAnswer));

  if (isCorrect) {
    typingInput.classList.add("correct");
    typingFeedback.textContent = autoNextEnabled
      ? "Chính xác! 2 giây nữa app sẽ tự chuyển sang từ tiếp theo."
      : "Chính xác! Bạn có thể xem ví dụ bên dưới rồi bấm Từ tiếp theo.";
    typingFeedback.classList.add("success");
    typingExampleBox.classList.remove("hidden");

    if (autoNextEnabled) {
      autoNextTimer = setTimeout(() => {
        autoNextTimer = null;
        nextWord();
        if (currentMode === "typing") typingInput.focus();
      }, 2000);
    }

    return;
  }

  if (!isPossiblePrefix) {
    typingInput.classList.add("wrong");
    typingFeedback.textContent = "Chưa đúng, thử lại nhé.";
    typingFeedback.classList.add("error");
  }
}

function showAnswer() {
  const word = currentUnitWords[currentIndex];
  typingFeedback.textContent = `Đáp án: ${getBaseWord(word.englishWord)}`;
  typingFeedback.className = "feedback error";
  typingExampleBox.classList.remove("hidden");
}

/**
 * Xáo trộn danh sách từ hiện tại bằng thuật toán Fisher-Yates.
 * Sau khi xáo trộn, app quay về từ đầu tiên trong thứ tự mới.
 */
function shuffleCurrentWords() {
  for (let i = currentUnitWords.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [currentUnitWords[i], currentUnitWords[randomIndex]] = [currentUnitWords[randomIndex], currentUnitWords[i]];
  }

  currentIndex = 0;
  renderCurrentWord();
  renderWordList();
}

function renderWordList() {
  wordList.innerHTML = currentUnitWords
    .map((item, index) => `
      <div class="word-list-item ${index === currentIndex ? "active" : ""}">
        <button type="button" data-index="${index}">${item.englishWord}</button>
        <small>${index + 1}</small>
      </div>
    `)
    .join("");
}

function highlightActiveWord() {
  document.querySelectorAll(".word-list-item").forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

unitSelect.addEventListener("change", event => loadUnit(event.target.value));
flashcard.addEventListener("click", () => flashcard.classList.toggle("flipped"));
flashcard.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") flashcard.classList.toggle("flipped");
});
speakBtn.addEventListener("click", event => {
  event.stopPropagation();
  speakCurrentWord();
});
speakExampleBtn.addEventListener("click", event => {
  event.stopPropagation();
  speakCurrentExample();
});
prevBtn.addEventListener("click", prevWord);
nextBtn.addEventListener("click", nextWord);
shuffleBtn.addEventListener("click", shuffleCurrentWords);
flashcardModeBtn.addEventListener("click", () => switchMode("flashcard"));
typingModeBtn.addEventListener("click", () => switchMode("typing"));
typingInput.addEventListener("input", checkTypingAnswer);
typingInput.addEventListener("keydown", event => {
  if (event.key === "Enter") checkTypingAnswer();
});
checkBtn.addEventListener("click", checkTypingAnswer);
typingPrevBtn.addEventListener("click", prevWord);
autoNextBtn.addEventListener("click", toggleAutoNext);
typingNextBtn.addEventListener("click", nextWord);
showAnswerBtn.addEventListener("click", showAnswer);
wordList.addEventListener("click", event => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  currentIndex = Number(button.dataset.index);
  renderCurrentWord();
});

document.addEventListener("keydown", event => {
  if (event.target === typingInput) return;
  if (event.key === "ArrowRight") nextWord();
  if (event.key === "ArrowLeft") prevWord();
});

updateAutoNextButton();
renderUnits();
loadUnit(unitSelect.value);
