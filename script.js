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

const grammarData = [
  {
    id: "present-simple",
    order: 1,
    title: "Present Simple",
    vi: "Hiện tại đơn",
    category: "present",
    formula: ["I/You/We/They + V", "He/She/It + V-s/es", "Do/Does + S + V?", "S + am/is/are + ..."],
    realUse: [
      "Dùng khi nói về thói quen, lịch sinh hoạt hoặc việc lặp lại đều đặn.",
      "Dùng cho sự thật hiển nhiên, quy luật tự nhiên hoặc điều luôn đúng.",
      "Dùng cho lịch trình cố định như giờ tàu, giờ chiếu phim, giờ học."
    ],
    signals: ["always", "usually", "often", "sometimes", "never", "every day/week/month", "on Mondays"],
    examples: [
      ["I study English every evening.", "Tôi học tiếng Anh mỗi tối, đây là thói quen."],
      ["The sun rises in the east.", "Mặt trời mọc ở hướng đông, đây là sự thật."],
      ["The bus leaves at 7 a.m.", "Xe buýt rời bến lúc 7 giờ, đây là lịch trình."]
    ],
    mistakes: ["Quên thêm s/es với he/she/it.", "Dùng V-ing cho thói quen hằng ngày.", "Dùng do với he/she/it thay vì does."],
    compare: "Khác Present Continuous: Present Simple nói thói quen/sự thật, Present Continuous nói việc đang diễn ra ngay lúc nói."
  },
  {
    id: "present-continuous",
    order: 2,
    title: "Present Continuous",
    vi: "Hiện tại tiếp diễn",
    category: "present",
    formula: ["S + am/is/are + V-ing", "S + am/is/are + not + V-ing", "Am/Is/Are + S + V-ing?"],
    realUse: [
      "Dùng khi hành động đang xảy ra ngay lúc nói.",
      "Dùng khi một việc đang diễn ra quanh thời điểm hiện tại, chưa chắc đúng ngay giây này.",
      "Dùng cho kế hoạch tương lai đã sắp xếp rõ ràng."
    ],
    signals: ["now", "right now", "at the moment", "look!", "listen!", "today", "this week"],
    examples: [
      ["I am studying now.", "Tôi đang học ngay lúc này."],
      ["She is staying with her aunt this week.", "Tuần này cô ấy đang ở với dì."],
      ["We are meeting Nam tomorrow.", "Chúng tôi đã sắp xếp gặp Nam ngày mai."]
    ],
    mistakes: ["Dùng tiếp diễn với động từ trạng thái như know, want, believe khi không cần.", "Quên to be trước V-ing.", "Viết makeing thay vì making."],
    compare: "Nếu là lịch trình cố định dùng Present Simple; nếu là kế hoạch cá nhân đã hẹn/sắp xếp dùng Present Continuous."
  },
  {
    id: "present-perfect",
    order: 3,
    title: "Present Perfect",
    vi: "Hiện tại hoàn thành",
    category: "present",
    formula: ["S + have/has + V3/PII", "S + have/has + not + V3/PII", "Have/Has + S + V3/PII?"],
    realUse: [
      "Dùng cho hành động đã xảy ra nhưng kết quả còn liên quan đến hiện tại.",
      "Dùng cho trải nghiệm sống, không nhấn mạnh thời điểm cụ thể.",
      "Dùng với for/since khi việc bắt đầu trong quá khứ và vẫn còn tới hiện tại."
    ],
    signals: ["just", "already", "yet", "ever", "never", "recently", "lately", "for", "since", "so far", "up to now"],
    examples: [
      ["I have lost my key.", "Tôi làm mất chìa khóa và bây giờ vẫn chưa có."],
      ["She has visited Da Nang twice.", "Cô ấy đã có trải nghiệm đến Đà Nẵng hai lần."],
      ["We have learned English for a year.", "Chúng tôi học từ một năm trước và hiện vẫn học."]
    ],
    mistakes: ["Dùng yesterday/last year trực tiếp với Present Perfect.", "Nhầm for với since.", "Quên V3 của động từ bất quy tắc."],
    compare: "Past Simple nhấn mạnh thời điểm đã kết thúc; Present Perfect nhấn mạnh kết quả hoặc liên hệ tới hiện tại."
  },
  {
    id: "present-perfect-continuous",
    order: 4,
    title: "Present Perfect Continuous",
    vi: "Hiện tại hoàn thành tiếp diễn",
    category: "present",
    formula: ["S + have/has + been + V-ing", "S + have/has + not + been + V-ing", "Have/Has + S + been + V-ing?"],
    realUse: [
      "Dùng để nhấn mạnh quá trình kéo dài từ quá khứ đến hiện tại.",
      "Dùng khi kết quả hiện tại cho thấy một hành động vừa kéo dài trước đó.",
      "Phù hợp với câu hỏi How long...? khi muốn hỏi quá trình."
    ],
    signals: ["for", "since", "all day", "lately", "recently", "how long"],
    examples: [
      ["I have been studying for three hours.", "Tôi đã học suốt ba tiếng, nhấn mạnh thời gian kéo dài."],
      ["The ground is wet. It has been raining.", "Đất ướt vì trời vừa mưa kéo dài."],
      ["She has been working here since 2022.", "Cô ấy làm ở đây từ 2022 đến nay."]
    ],
    mistakes: ["Dùng với động từ không thường chia tiếp diễn.", "Nhầm với Present Perfect khi muốn nhấn mạnh kết quả hoàn thành.", "Quên been."],
    compare: "Present Perfect nhấn mạnh kết quả; Present Perfect Continuous nhấn mạnh quá trình/thời lượng."
  },
  {
    id: "past-simple",
    order: 5,
    title: "Past Simple",
    vi: "Quá khứ đơn",
    category: "past",
    formula: ["S + V2/V-ed", "S + did not + V", "Did + S + V?", "S + was/were + ..."],
    realUse: [
      "Dùng để kể một việc đã xảy ra và kết thúc trong quá khứ.",
      "Dùng để kể chuỗi hành động xảy ra lần lượt trong quá khứ.",
      "Dùng khi có mốc thời gian quá khứ rõ ràng."
    ],
    signals: ["yesterday", "last night/week/month/year", "ago", "in 2019", "when I was young"],
    examples: [
      ["I watched a film last night.", "Tôi xem phim tối qua, việc đã kết thúc."],
      ["She opened the door, walked in and smiled.", "Một chuỗi hành động trong quá khứ."],
      ["They lived in Hue in 2010.", "Có mốc thời gian quá khứ rõ ràng."]
    ],
    mistakes: ["Sau did vẫn dùng V2 thay vì V nguyên mẫu.", "Nhầm was/were theo chủ ngữ.", "Dùng Past Simple cho việc còn kéo dài đến hiện tại."],
    compare: "Past Simple có thời điểm đã kết thúc; Present Perfect không nhấn mạnh thời điểm hoặc còn liên quan hiện tại."
  },
  {
    id: "past-continuous",
    order: 6,
    title: "Past Continuous",
    vi: "Quá khứ tiếp diễn",
    category: "past",
    formula: ["S + was/were + V-ing", "S + was/were + not + V-ing", "Was/Were + S + V-ing?"],
    realUse: [
      "Dùng cho hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ.",
      "Dùng cho hành động nền đang xảy ra thì hành động khác xen vào.",
      "Dùng cho hai hành động đang diễn ra song song trong quá khứ."
    ],
    signals: ["at 8 p.m. yesterday", "this time last week", "when", "while"],
    examples: [
      ["I was studying at 9 p.m. yesterday.", "Tôi đang học tại thời điểm đó."],
      ["She was cooking when I called.", "Cô ấy đang nấu thì tôi gọi."],
      ["While I was reading, my brother was playing games.", "Hai việc cùng đang xảy ra."]
    ],
    mistakes: ["Quên was/were trước V-ing.", "Dùng while với hành động ngắn xen vào.", "Nhầm hành động nền và hành động xen vào."],
    compare: "Past Continuous là hành động đang diễn ra; Past Simple là hành động cắt ngang hoặc xảy ra xong."
  },
  {
    id: "past-perfect",
    order: 7,
    title: "Past Perfect",
    vi: "Quá khứ hoàn thành",
    category: "past",
    formula: ["S + had + V3/PII", "S + had not + V3/PII", "Had + S + V3/PII?"],
    realUse: [
      "Dùng cho hành động xảy ra trước một hành động/mốc khác trong quá khứ.",
      "Giúp câu chuyện quá khứ rõ thứ tự trước-sau.",
      "Thường đi cùng before, after, when, by the time."
    ],
    signals: ["before", "after", "by the time", "when", "already", "never"],
    examples: [
      ["When I arrived, the train had left.", "Tàu rời đi trước khi tôi đến."],
      ["After they had finished dinner, they watched TV.", "Ăn tối xong trước rồi mới xem TV."],
      ["I had never seen snow before I went to Sapa.", "Chưa từng thấy tuyết trước chuyến đi." ]
    ],
    mistakes: ["Dùng Past Perfect cho mọi câu quá khứ dù không có mốc so sánh.", "Quên had.", "Nhầm V2 với V3."],
    compare: "Past Simple kể sự kiện quá khứ; Past Perfect đánh dấu sự kiện xảy ra sớm hơn trong quá khứ."
  },
  {
    id: "past-perfect-continuous",
    order: 8,
    title: "Past Perfect Continuous",
    vi: "Quá khứ hoàn thành tiếp diễn",
    category: "past",
    formula: ["S + had + been + V-ing", "S + had not + been + V-ing", "Had + S + been + V-ing?"],
    realUse: [
      "Dùng để nhấn mạnh một quá trình kéo dài trước một mốc/hành động quá khứ.",
      "Thường giải thích nguyên nhân của trạng thái trong quá khứ.",
      "Dùng tốt với for/since/by the time trong bối cảnh quá khứ."
    ],
    signals: ["for", "since", "before", "by the time", "until then"],
    examples: [
      ["I had been waiting for two hours when she arrived.", "Tôi đã chờ suốt hai tiếng trước khi cô ấy đến."],
      ["He was tired because he had been working all day.", "Anh ấy mệt vì đã làm việc cả ngày."],
      ["They had been studying English before they moved abroad.", "Họ đã học tiếng Anh trước khi ra nước ngoài." ]
    ],
    mistakes: ["Quên been.", "Dùng thì này khi chỉ muốn nói kết quả hoàn thành.", "Không có mốc quá khứ thứ hai để so sánh."],
    compare: "Past Perfect nhấn mạnh việc đã xong; Past Perfect Continuous nhấn mạnh quá trình kéo dài trước một mốc quá khứ."
  },
  {
    id: "future-simple",
    order: 9,
    title: "Future Simple",
    vi: "Tương lai đơn",
    category: "future",
    formula: ["S + will + V", "S + will not/won't + V", "Will + S + V?"],
    realUse: [
      "Dùng cho quyết định đưa ra ngay lúc nói.",
      "Dùng cho lời hứa, đề nghị, dự đoán cá nhân.",
      "Dùng khi nói về tương lai nhưng chưa có kế hoạch cụ thể."
    ],
    signals: ["tomorrow", "next week/month/year", "soon", "I think", "I hope", "probably"],
    examples: [
      ["I will call you later.", "Tôi quyết định/gửi lời hứa sẽ gọi sau."],
      ["I think she will pass the exam.", "Dự đoán cá nhân."],
      ["It is hot. I will open the window.", "Quyết định ngay lúc nói." ]
    ],
    mistakes: ["Thêm to sau will.", "Dùng will cho kế hoạch đã chuẩn bị rõ mà nên dùng be going to/present continuous.", "Quên V nguyên mẫu sau will."],
    compare: "Will thường là quyết định tức thì/dự đoán; be going to là kế hoạch hoặc dự đoán có căn cứ."
  },
  {
    id: "future-continuous",
    order: 10,
    title: "Future Continuous",
    vi: "Tương lai tiếp diễn",
    category: "future",
    formula: ["S + will + be + V-ing", "S + won't + be + V-ing", "Will + S + be + V-ing?"],
    realUse: [
      "Dùng cho hành động đang diễn ra tại một thời điểm xác định trong tương lai.",
      "Dùng để hình dung một bối cảnh tương lai đang tiếp diễn.",
      "Dùng khi một việc đang diễn ra thì việc khác xen vào trong tương lai."
    ],
    signals: ["this time tomorrow", "at 8 p.m. tomorrow", "when you arrive", "next week at this time"],
    examples: [
      ["This time tomorrow, I will be flying to Hanoi.", "Vào thời điểm này ngày mai, tôi sẽ đang bay."],
      ["At 9 p.m., she will be studying.", "Lúc 9 giờ tối cô ấy sẽ đang học."],
      ["When you get home, I will be cooking dinner.", "Khi bạn về, tôi sẽ đang nấu." ]
    ],
    mistakes: ["Quên be sau will.", "Dùng Future Simple khi muốn nhấn mạnh đang diễn ra tại thời điểm tương lai.", "Nhầm V-ing thành V nguyên mẫu."],
    compare: "Future Simple nói việc sẽ xảy ra; Future Continuous nói việc sẽ đang xảy ra."
  },
  {
    id: "future-perfect",
    order: 11,
    title: "Future Perfect",
    vi: "Tương lai hoàn thành",
    category: "future",
    formula: ["S + will + have + V3/PII", "S + won't + have + V3/PII", "Will + S + have + V3/PII?"],
    realUse: [
      "Dùng cho hành động sẽ hoàn thành trước một mốc tương lai.",
      "Dùng khi muốn nhấn mạnh deadline hoặc kết quả trước thời điểm khác.",
      "Thường xuất hiện với by/before/by the time."
    ],
    signals: ["by", "before", "by the time", "by next week", "by 2030"],
    examples: [
      ["I will have finished the report by 5 p.m.", "Tôi sẽ hoàn thành báo cáo trước 5 giờ."],
      ["By next month, we will have learned 500 words.", "Trước tháng sau chúng tôi sẽ học xong 500 từ."],
      ["The train will have left before we arrive.", "Tàu sẽ rời đi trước khi chúng tôi đến." ]
    ],
    mistakes: ["Quên have sau will.", "Dùng V2 thay vì V3.", "Không có mốc tương lai để thể hiện 'trước khi'."],
    compare: "Future Continuous nhấn mạnh đang diễn ra; Future Perfect nhấn mạnh đã hoàn thành trước mốc tương lai."
  },
  {
    id: "future-perfect-continuous",
    order: 12,
    title: "Future Perfect Continuous",
    vi: "Tương lai hoàn thành tiếp diễn",
    category: "future",
    formula: ["S + will + have + been + V-ing", "S + won't + have + been + V-ing", "Will + S + have + been + V-ing?"],
    realUse: [
      "Dùng để nhấn mạnh một quá trình sẽ kéo dài đến một mốc trong tương lai.",
      "Thường dùng với for + khoảng thời gian và by + mốc tương lai.",
      "Phù hợp khi muốn nói 'tính đến lúc đó, tôi đã làm việc này được bao lâu'."
    ],
    signals: ["by", "for", "by this time next week", "by the end of"],
    examples: [
      ["By July, I will have been working here for two years.", "Tính đến tháng 7, tôi sẽ đã làm ở đây được hai năm."],
      ["By 10 p.m., she will have been studying for five hours.", "Đến 10 giờ tối, cô ấy sẽ đã học suốt 5 tiếng."],
      ["By next month, they will have been building the house for a year.", "Đến tháng sau, họ sẽ đã xây nhà được một năm." ]
    ],
    mistakes: ["Thiếu have hoặc been.", "Dùng thì này cho một hành động ngắn không có quá trình.", "Nhầm với Future Perfect khi chỉ quan tâm kết quả."],
    compare: "Future Perfect nói sẽ xong; Future Perfect Continuous nói sẽ đã kéo dài bao lâu."
  },
  {
    id: "be-going-to",
    order: 13,
    title: "Be Going To",
    vi: "Tương lai gần",
    category: "future",
    formula: ["S + am/is/are + going to + V", "S + am/is/are + not + going to + V", "Am/Is/Are + S + going to + V?"],
    realUse: [
      "Dùng cho kế hoạch/dự định đã có trước lúc nói.",
      "Dùng cho dự đoán có bằng chứng hiện tại rõ ràng.",
      "Rất tự nhiên khi nói về việc mình đã chuẩn bị hoặc sắp làm."
    ],
    signals: ["look!", "tonight", "this weekend", "next week", "I have decided", "there are dark clouds"],
    examples: [
      ["I am going to revise grammar tonight.", "Tôi đã có dự định ôn ngữ pháp tối nay."],
      ["Look at those clouds. It is going to rain.", "Có bằng chứng trời sắp mưa."],
      ["We are going to take a trip this weekend.", "Chúng tôi đã lên kế hoạch đi chơi cuối tuần." ]
    ],
    mistakes: ["Quên am/is/are.", "Thêm to sau động từ chính.", "Nhầm với will trong quyết định tức thì."],
    compare: "Be going to nói kế hoạch đã định hoặc dự đoán có bằng chứng; will thường là quyết định ngay lúc nói."
  }
];

const grammarQuestions = [
  { tenseId: "present-simple", type: "Choose the correct option", question: "She usually ___ breakfast at 7 a.m.", options: ["has", "is having", "have", "having"], answer: 0, explain: "Usually là dấu hiệu thói quen, dùng Present Simple: she has." },
  { tenseId: "present-simple", type: "Choose the correct option", question: "Water ___ at 100°C.", options: ["boil", "boils", "is boiling", "boiled"], answer: 1, explain: "Sự thật hiển nhiên dùng Present Simple; water là số ít: boils." },
  { tenseId: "present-simple", type: "Find the best sentence", question: "Câu nào diễn tả lịch trình cố định?", options: ["The train leaves at 6.", "The train is leaving now.", "The train left yesterday.", "The train has left."], answer: 0, explain: "Lịch trình cố định thường dùng Present Simple." },
  { tenseId: "present-continuous", type: "Choose the correct option", question: "Listen! Someone ___ at the door.", options: ["knocks", "is knocking", "knocked", "has knocked"], answer: 1, explain: "Listen! báo hiệu việc đang xảy ra: is knocking." },
  { tenseId: "present-continuous", type: "Choose the correct option", question: "I ___ with my cousins this week.", options: ["stay", "am staying", "stayed", "have stayed"], answer: 1, explain: "This week là quanh thời điểm hiện tại, dùng Present Continuous." },
  { tenseId: "present-continuous", type: "Choose the correct option", question: "We ___ Nam tomorrow morning. Everything is arranged.", options: ["meet", "are meeting", "met", "have met"], answer: 1, explain: "Kế hoạch đã sắp xếp trong tương lai có thể dùng Present Continuous." },
  { tenseId: "present-perfect", type: "Choose the correct option", question: "I ___ my homework already.", options: ["finish", "finished", "have finished", "am finishing"], answer: 2, explain: "Already thường đi với Present Perfect: have finished." },
  { tenseId: "present-perfect", type: "Choose the correct option", question: "She has lived here ___ 2020.", options: ["for", "since", "ago", "during"], answer: 1, explain: "Since dùng với mốc thời gian; for dùng với khoảng thời gian." },
  { tenseId: "present-perfect", type: "Choose the correct option", question: "Have you ___ eaten sushi?", options: ["ever", "yesterday", "last", "ago"], answer: 0, explain: "Ever hỏi trải nghiệm, thường dùng Present Perfect." },
  { tenseId: "present-perfect-continuous", type: "Choose the correct option", question: "You look tired. How long ___ you ___?", options: ["do / run", "are / running", "have / been running", "did / run"], answer: 2, explain: "Hỏi quá trình kéo dài đến hiện tại: have been running." },
  { tenseId: "present-perfect-continuous", type: "Choose the correct option", question: "It ___ all morning, so the road is wet.", options: ["rains", "has been raining", "rained", "is rain"], answer: 1, explain: "Kết quả hiện tại do quá trình kéo dài: has been raining." },
  { tenseId: "present-perfect-continuous", type: "Choose the correct option", question: "I ___ English for three hours.", options: ["have been studying", "study", "studied", "am study"], answer: 0, explain: "For three hours + nhấn mạnh quá trình đến hiện tại." },
  { tenseId: "past-simple", type: "Choose the correct option", question: "They ___ to Da Lat last summer.", options: ["go", "went", "have gone", "were going"], answer: 1, explain: "Last summer là mốc quá khứ đã kết thúc, dùng Past Simple: went." },
  { tenseId: "past-simple", type: "Choose the correct option", question: "Did you ___ the film yesterday?", options: ["watched", "watch", "watching", "watches"], answer: 1, explain: "Sau did dùng động từ nguyên mẫu: watch." },
  { tenseId: "past-simple", type: "Choose the correct option", question: "When she got home, she ___ dinner and went to bed.", options: ["cooks", "cooked", "has cooked", "was cooking"], answer: 1, explain: "Chuỗi hành động quá khứ dùng Past Simple." },
  { tenseId: "past-continuous", type: "Choose the correct option", question: "At 8 p.m. yesterday, I ___ TV.", options: ["watch", "watched", "was watching", "have watched"], answer: 2, explain: "Tại một thời điểm cụ thể trong quá khứ, dùng Past Continuous." },
  { tenseId: "past-continuous", type: "Choose the correct option", question: "She ___ dinner when I called.", options: ["cooked", "was cooking", "has cooked", "cooks"], answer: 1, explain: "Hành động đang diễn ra làm nền: was cooking." },
  { tenseId: "past-continuous", type: "Choose the correct option", question: "While I ___, my brother was listening to music.", options: ["studied", "was studying", "study", "have studied"], answer: 1, explain: "Hai hành động song song trong quá khứ thường dùng while + Past Continuous." },
  { tenseId: "past-perfect", type: "Choose the correct option", question: "When we arrived, the train ___.", options: ["left", "had left", "has left", "was leaving"], answer: 1, explain: "Tàu rời đi trước khi chúng tôi đến, dùng Past Perfect." },
  { tenseId: "past-perfect", type: "Choose the correct option", question: "After they ___ the film, they went home.", options: ["had seen", "saw", "have seen", "were seeing"], answer: 0, explain: "Hành động xem phim xảy ra trước hành động về nhà." },
  { tenseId: "past-perfect", type: "Choose the correct option", question: "I ___ snow before I went to Sapa.", options: ["never see", "had never seen", "never saw", "have never seen"], answer: 1, explain: "Trải nghiệm trước một mốc quá khứ dùng Past Perfect." },
  { tenseId: "past-perfect-continuous", type: "Choose the correct option", question: "I ___ for three hours when she arrived.", options: ["waited", "was waiting", "had been waiting", "have waited"], answer: 2, explain: "Quá trình kéo dài trước một mốc quá khứ dùng Past Perfect Continuous." },
  { tenseId: "past-perfect-continuous", type: "Choose the correct option", question: "He was tired because he ___ all day.", options: ["worked", "had been working", "has worked", "is working"], answer: 1, explain: "Nguyên nhân kéo dài trước trạng thái quá khứ: had been working." },
  { tenseId: "past-perfect-continuous", type: "Choose the correct option", question: "They ___ English for years before they moved abroad.", options: ["had been studying", "study", "studied", "have studied"], answer: 0, explain: "For years + trước mốc quá khứ: had been studying." },
  { tenseId: "future-simple", type: "Choose the correct option", question: "It's cold. I ___ the window.", options: ["close", "am closing", "will close", "closed"], answer: 2, explain: "Quyết định ngay lúc nói dùng will." },
  { tenseId: "future-simple", type: "Choose the correct option", question: "I think he ___ the exam.", options: ["passes", "will pass", "is passing", "passed"], answer: 1, explain: "I think + dự đoán cá nhân thường dùng will." },
  { tenseId: "future-simple", type: "Choose the correct option", question: "I promise I ___ late.", options: ["won't be", "am not", "wasn't", "haven't been"], answer: 0, explain: "Lời hứa thường dùng will/won't." },
  { tenseId: "future-continuous", type: "Choose the correct option", question: "This time tomorrow, I ___ to Japan.", options: ["fly", "will be flying", "will fly", "flew"], answer: 1, explain: "This time tomorrow chỉ hành động đang diễn ra ở tương lai." },
  { tenseId: "future-continuous", type: "Choose the correct option", question: "At 9 p.m. tomorrow, she ___ for the test.", options: ["will study", "will be studying", "studied", "has studied"], answer: 1, explain: "Tại một thời điểm tương lai, hành động đang diễn ra: will be studying." },
  { tenseId: "future-continuous", type: "Choose the correct option", question: "When you arrive, we ___ dinner.", options: ["will be having", "have", "had", "have had"], answer: 0, explain: "Một hành động sẽ đang diễn ra khi hành động khác xảy ra trong tương lai." },
  { tenseId: "future-perfect", type: "Choose the correct option", question: "By 5 p.m., I ___ the report.", options: ["will finish", "will have finished", "am finishing", "finished"], answer: 1, explain: "By + mốc tương lai, nhấn mạnh hoàn thành trước mốc: will have finished." },
  { tenseId: "future-perfect", type: "Choose the correct option", question: "The plane ___ by the time we arrive.", options: ["will land", "will have landed", "is landing", "landed"], answer: 1, explain: "Hoàn thành trước một hành động tương lai khác: will have landed." },
  { tenseId: "future-perfect", type: "Choose the correct option", question: "By next Sunday, we ___ here for three weeks.", options: ["stay", "will have stayed", "stayed", "are staying"], answer: 1, explain: "By next Sunday + kết quả tính đến mốc tương lai." },
  { tenseId: "future-perfect-continuous", type: "Choose the correct option", question: "By July, I ___ here for two years.", options: ["will work", "will have been working", "work", "worked"], answer: 1, explain: "Nhấn mạnh quá trình kéo dài đến mốc tương lai." },
  { tenseId: "future-perfect-continuous", type: "Choose the correct option", question: "By 10 p.m., she ___ for five hours.", options: ["will study", "will have studied", "will have been studying", "studied"], answer: 2, explain: "For five hours + by 10 p.m. nhấn mạnh thời lượng kéo dài." },
  { tenseId: "future-perfect-continuous", type: "Choose the correct option", question: "By next month, they ___ the bridge for a year.", options: ["will have been building", "will build", "built", "are building"], answer: 0, explain: "Quá trình xây kéo dài đến tháng sau." },
  { tenseId: "be-going-to", type: "Choose the correct option", question: "Look at those clouds! It ___.", options: ["will rain", "rains", "is going to rain", "rained"], answer: 2, explain: "Có bằng chứng hiện tại rõ ràng nên dùng be going to." },
  { tenseId: "be-going-to", type: "Choose the correct option", question: "I bought vegetables. I ___ dinner tonight.", options: ["will cook", "am going to cook", "cooked", "cook"], answer: 1, explain: "Đã có chuẩn bị/kế hoạch trước nên dùng be going to." },
  { tenseId: "be-going-to", type: "Choose the correct option", question: "They ___ a trip this weekend. Everything is planned.", options: ["are going to take", "will take", "took", "take"], answer: 0, explain: "Kế hoạch đã chuẩn bị rõ dùng be going to." }
];

const wordFormData = [
  { title: "Danh từ (Nouns)", icon: "📦", type: "noun", rows: [["-tion / -sion", "educate → education", "sự việc, quá trình"], ["-ment", "develop → development", "kết quả/quá trình"], ["-ness", "happy → happiness", "trạng thái"], ["-ity", "active → activity", "tính chất"], ["-er / -or", "teach → teacher", "người làm việc"], ["-ist", "science → scientist", "người theo lĩnh vực"]] },
  { title: "Tính từ (Adjectives)", icon: "🎨", type: "adjective", rows: [["-ful", "care → careful", "có đầy đủ"], ["-less", "care → careless", "thiếu/không có"], ["-able / -ible", "comfort → comfortable", "có thể/đáng"], ["-ous", "danger → dangerous", "mang tính"], ["-ive", "create → creative", "có tính chất"], ["-al", "nation → national", "thuộc về"]] },
  { title: "Trạng từ (Adverbs)", icon: "⚡", type: "adverb", rows: [["-ly", "quick → quickly", "một cách"], ["-ward(s)", "back → backwards", "hướng về"], ["-wise", "clock → clockwise", "theo chiều/cách"], ["-ally", "basic → basically", "một cách"]] },
  { title: "Động từ (Verbs)", icon: "🏃", type: "verb", rows: [["-en", "short → shorten", "làm cho"], ["-ify", "simple → simplify", "biến thành"], ["-ize/-ise", "modern → modernize", "làm thành"], ["en-", "rich → enrich", "làm cho"], ["-ate", "active → activate", "kích hoạt"]] },
  { title: "Tiền tố phủ định", icon: "🚫", type: "prefix", rows: [["un-", "happy → unhappy", "không"], ["in-/im-/il-/ir-", "possible → impossible", "không"], ["dis-", "agree → disagree", "phủ định/ngược"], ["non-", "smoker → non-smoker", "không phải"], ["mis-", "understand → misunderstand", "sai/lầm"]] },
  { title: "Tiền tố mức độ/vị trí", icon: "🧭", type: "prefix", rows: [["re-", "write → rewrite", "làm lại"], ["over-", "cook → overcook", "quá mức"], ["under-", "estimate → underestimate", "dưới/thiếu"], ["pre-", "view → preview", "trước"], ["post-", "war → post-war", "sau"], ["inter-", "national → international", "giữa"]] }
];

const wordFormQuestions = [
  { question: "Hậu tố nào thường tạo danh từ chỉ quá trình/kết quả?", options: ["-tion", "-ful", "-ly", "un-"], answer: 0, explain: "-tion/-sion thường tạo danh từ: educate → education." },
  { question: "careful thuộc loại từ nào?", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: 1, explain: "-ful thường tạo tính từ: careful." },
  { question: "quickly thuộc loại từ nào?", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: 2, explain: "-ly thường tạo trạng từ: quick → quickly." },
  { question: "Tiền tố nào thường mang nghĩa 'làm lại'?", options: ["pre-", "re-", "non-", "under-"], answer: 1, explain: "re- = again: rewrite, redo, review." },
  { question: "impossible dùng tiền tố phủ định nào?", options: ["im-", "over-", "post-", "en-"], answer: 0, explain: "im- là biến thể của in- trước p/b/m: impossible." }
];

const ipaData = [
  { group: "Vowels - Monophthongs", className: "vowels", sounds: [
    { symbol: "/iː/", word: "see", soundCue: "ee", examples: "see, heat, believe, key", tip: "Lưỡi cao phía trước, môi hơi kéo ngang." },
    { symbol: "/ɪ/", word: "sit", soundCue: "ih", examples: "sit, ship, busy, women", tip: "Âm ngắn hơn /iː/, miệng thả lỏng hơn." },
    { symbol: "/e/", word: "bed", soundCue: "eh", examples: "bed, head, many, said", tip: "Miệng mở vừa, lưỡi ở phía trước." },
    { symbol: "/æ/", word: "cat", soundCue: "aeh", examples: "cat, map, apple, bad", tip: "Miệng mở rộng, âm bè hơn /e/." },
    { symbol: "/ɑː/", word: "car", soundCue: "ah", examples: "car, father, start, heart", tip: "Miệng mở, lưỡi thấp, âm dài." },
    { symbol: "/ɒ/", word: "hot", soundCue: "short o", examples: "hot, shop, clock, want", tip: "Âm ngắn, môi tròn nhẹ." },
    { symbol: "/ɔː/", word: "law", soundCue: "aw", examples: "law, saw, talk, sport", tip: "Môi tròn hơn, âm dài." },
    { symbol: "/ʊ/", word: "book", soundCue: "short oo", examples: "book, good, put, could", tip: "Âm ngắn, môi tròn nhẹ." },
    { symbol: "/uː/", word: "blue", soundCue: "oo", examples: "blue, food, school, two", tip: "Môi tròn, âm dài." },
    { symbol: "/ʌ/", word: "cup", soundCue: "uh", examples: "cup, love, money, son", tip: "Âm ngắn, miệng mở tự nhiên." },
    { symbol: "/ɜː/", word: "bird", soundCue: "er", examples: "bird, work, learn, turn", tip: "Âm dài, môi trung tính." },
    { symbol: "/ə/", word: "about", soundCue: "uh", examples: "about, teacher, banana", tip: "Schwa, âm yếu và rất phổ biến." }
  ]},
  { group: "Vowels - Diphthongs", className: "diphthongs", sounds: [
    { symbol: "/eɪ/", word: "day", soundCue: "ay", examples: "day, say, train, eight", tip: "Trượt từ /e/ sang /ɪ/." },
    { symbol: "/ɔɪ/", word: "boy", soundCue: "oy", examples: "boy, coin, choice", tip: "Trượt từ /ɔ/ sang /ɪ/." },
    { symbol: "/aɪ/", word: "my", soundCue: "eye", examples: "my, time, high", tip: "Trượt từ /a/ sang /ɪ/." },
    { symbol: "/əʊ/", word: "go", soundCue: "oh", examples: "go, home, show", tip: "Trượt từ /ə/ sang /ʊ/." },
    { symbol: "/aʊ/", word: "now", soundCue: "ow", examples: "now, house, sound", tip: "Trượt từ /a/ sang /ʊ/." },
    { symbol: "/ɪə/", word: "near", soundCue: "ear", examples: "near, here, idea", tip: "Trượt về âm /ə/." },
    { symbol: "/eə/", word: "hair", soundCue: "air", examples: "hair, there, care", tip: "Âm đôi thường gặp trong care/there." },
    { symbol: "/ʊə/", word: "tour", soundCue: "oor", examples: "tour, pure, cure", tip: "Âm đôi ít gặp hơn, tùy giọng có thể biến đổi." }
  ]},
  { group: "Consonants", className: "consonants", sounds: [
    { symbol: "/p/", word: "pen", soundCue: "puh", examples: "pen, paper, stop", tip: "Bật hơi nhẹ, hai môi khép rồi mở." },
    { symbol: "/b/", word: "boy", soundCue: "buh", examples: "boy, rubber, cab", tip: "Giống /p/ nhưng có rung dây thanh." },
    { symbol: "/t/", word: "tea", soundCue: "tuh", examples: "tea, time, late", tip: "Đầu lưỡi chạm lợi trên." },
    { symbol: "/d/", word: "day", soundCue: "duh", examples: "day, ready, bad", tip: "Giống /t/ nhưng hữu thanh." },
    { symbol: "/k/", word: "cat", soundCue: "kuh", examples: "cat, key, back", tip: "Gốc lưỡi chạm vòm mềm." },
    { symbol: "/g/", word: "go", soundCue: "guh", examples: "go, bigger, bag", tip: "Giống /k/ nhưng hữu thanh." },
    { symbol: "/f/", word: "fish", soundCue: "fff", examples: "fish, phone, laugh", tip: "Răng trên chạm môi dưới." },
    { symbol: "/v/", word: "very", soundCue: "vvv", examples: "very, never, live", tip: "Giống /f/ nhưng hữu thanh." },
    { symbol: "/θ/", word: "think", soundCue: "thin", examples: "think, three, both", tip: "Đưa đầu lưỡi nhẹ giữa hai răng." },
    { symbol: "/ð/", word: "this", soundCue: "this", examples: "this, mother, breathe", tip: "Giống /θ/ nhưng hữu thanh." },
    { symbol: "/ʃ/", word: "she", soundCue: "shhh", examples: "she, nation, wash", tip: "Môi hơi tròn, luồng hơi kéo dài." },
    { symbol: "/ʒ/", word: "vision", soundCue: "zhhh", examples: "vision, measure, usual", tip: "Âm hữu thanh của /ʃ/." },
    { symbol: "/h/", word: "hat", soundCue: "huh", examples: "hat, hello, behind", tip: "Hơi đi ra nhẹ từ họng." },
    { symbol: "/m/", word: "man", soundCue: "mmm", examples: "man, summer, room", tip: "Hai môi khép, hơi qua mũi." },
    { symbol: "/n/", word: "no", soundCue: "nnn", examples: "no, sunny, ten", tip: "Đầu lưỡi chạm lợi, hơi qua mũi." },
    { symbol: "/ŋ/", word: "sing", soundCue: "ng", examples: "sing, English, bank", tip: "Gốc lưỡi nâng, hơi qua mũi." },
    { symbol: "/l/", word: "light", soundCue: "luh", examples: "light, yellow, feel", tip: "Đầu lưỡi chạm lợi, hơi đi hai bên." },
    { symbol: "/r/", word: "red", soundCue: "ruh", examples: "red, around, car", tip: "Lưỡi cong nhẹ, không rung như tiếng Việt." },
    { symbol: "/w/", word: "we", soundCue: "wuh", examples: "we, quick, one", tip: "Môi tròn rồi mở nhanh." },
    { symbol: "/j/", word: "yes", soundCue: "yuh", examples: "yes, university, young", tip: "Âm giống 'y' trong tiếng Việt." }
  ]}
];


const ipaAudioProfiles = {
  "/iː/": { duration: 0.78, formants: [270, 2290, 3010] },
  "/ɪ/": { duration: 0.65, formants: [390, 1990, 2550] },
  "/e/": { duration: 0.65, formants: [530, 1840, 2480] },
  "/æ/": { duration: 0.75, formants: [660, 1720, 2410] },
  "/ɑː/": { duration: 0.78, formants: [730, 1090, 2440] },
  "/ɒ/": { duration: 0.65, formants: [570, 840, 2410] },
  "/ɔː/": { duration: 0.78, formants: [570, 840, 2410] },
  "/ʊ/": { duration: 0.65, formants: [440, 1020, 2240] },
  "/uː/": { duration: 0.78, formants: [300, 870, 2240] },
  "/ʌ/": { duration: 0.65, formants: [640, 1190, 2390] },
  "/ɜː/": { duration: 0.78, formants: [490, 1350, 1690] },
  "/ə/": { duration: 0.55, formants: [500, 1500, 2500] },
  "/eɪ/": { duration: 0.82, formants: [[530, 1840, 2480], [390, 1990, 2550]] },
  "/ɔɪ/": { duration: 0.82, formants: [[570, 840, 2410], [390, 1990, 2550]] },
  "/aɪ/": { duration: 0.82, formants: [[730, 1090, 2440], [390, 1990, 2550]] },
  "/əʊ/": { duration: 0.82, formants: [[500, 1500, 2500], [440, 1020, 2240]] },
  "/aʊ/": { duration: 0.82, formants: [[730, 1090, 2440], [440, 1020, 2240]] },
  "/ɪə/": { duration: 0.82, formants: [[390, 1990, 2550], [500, 1500, 2500]] },
  "/eə/": { duration: 0.82, formants: [[530, 1840, 2480], [500, 1500, 2500]] },
  "/ʊə/": { duration: 0.82, formants: [[440, 1020, 2240], [500, 1500, 2500]] }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storageKey = "destinationB1StudyStateV2";

function defaultState() {
  return { grammarMastered: {}, scores: {}, mistakes: [], streakDays: [], theme: "light" };
}

function loadState() {
  try {
    return { ...defaultState(), ...(JSON.parse(localStorage.getItem(storageKey)) || {}) };
  } catch {
    return defaultState();
  }
}

let appState = loadState();
let selectedGrammarId = localStorage.getItem("selectedGrammarId") || grammarData[0].id;
let currentPage = "overview";
let currentUnitWords = [];
let currentIndex = 0;
let currentMode = "flashcard";
let autoNextEnabled = localStorage.getItem("typingAutoNextEnabled") === "true";
let autoNextTimer = null;
let currentQuiz = null;
let wordFormQuizIndex = 0;
let selectedSound = ipaData[0].sounds[0];
let currentIpaAudioContext = null;

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function touchStreak() {
  const today = todayString();
  if (!appState.streakDays.includes(today)) {
    appState.streakDays.push(today);
    appState.streakDays = appState.streakDays.slice(-90);
    saveState();
  }
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }
  return copy;
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getGrammarById(id) {
  return grammarData.find(item => item.id === id) || grammarData[0];
}

function getBestScore(key) {
  return appState.scores[key] || 0;
}

function isGrammarMastered(grammar) {
  return Boolean(appState.grammarMastered[grammar.id]) || getBestScore(grammar.id) >= 80;
}

function grammarProgress(grammar) {
  if (isGrammarMastered(grammar)) return 100;
  return getBestScore(grammar.id) || 0;
}

function setPage(page) {
  currentPage = page;
  $$(".page").forEach(section => section.classList.toggle("active", section.id === `page-${page}`));
  $$(".nav-item[data-page]").forEach(button => button.classList.toggle("active", button.dataset.page === page));
  const titles = {
    overview: "Chào mừng trở lại!",
    vocabulary: "Học từ vựng tiếng Anh",
    grammar: "Grammar Units Overview",
    wordform: "Word Formation",
    ipa: "Interactive IPA Chart",
    tests: "Kiểm tra định kỳ",
    settings: "Settings"
  };
  const title = $("#pageTitle");
  if (title) title.textContent = titles[page] || "Destination B1";
  $("#sidebar")?.classList.remove("open");
  renderOverview();
}

function initNavigation() {
  $$("[data-page]").forEach(button => {
    button.addEventListener("click", () => setPage(button.dataset.page));
  });
  $$("[data-go-page]").forEach(button => {
    button.addEventListener("click", () => setPage(button.dataset.goPage));
  });
  $("#menuToggle")?.addEventListener("click", () => $("#sidebar")?.classList.toggle("open"));
}

function getBaseWord(word) {
  return word
    .replace(/<[^>]*>/g, " ")
    .replace(/\s*\([^)]*\)\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeAnswer(text) {
  return text.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
}

function getAcceptedAnswers(word) {
  const baseWord = getBaseWord(word);
  const rawWord = word.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return [...new Set([baseWord, rawWord, ...baseWord.split("="), ...rawWord.split("=")].map(answer => normalizeAnswer(answer)).filter(Boolean))];
}

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

function getExampleData(item) {
  const keyword = getExampleKeyword(item.englishWord) || "this word";
  const topic = getUnitTopic(item.unit);
  const englishExample = item.example?.trim() || `I can use “${keyword}” when I talk about ${topic}.`;
  const vietnameseExample = item.exampleMeaning?.trim() || `Tôi có thể dùng “${keyword}” khi nói về ${topic}; nghĩa cần nhớ: ${item.vietnameseMeaning}.`;
  return { english: englishExample, vietnamese: vietnameseExample };
}

function renderUnits() {
  const unitSelect = $("#unitSelect");
  if (!unitSelect) return;
  const units = [...new Set(vocabularyData.map(item => item.unit))];
  unitSelect.innerHTML = units.map(unit => `<option value="${unit}">${unit}</option>`).join("");
  const savedUnit = localStorage.getItem("selectedVocabularyUnit");
  if (savedUnit && units.includes(savedUnit)) unitSelect.value = savedUnit;
}

function loadUnit(unit) {
  currentUnitWords = vocabularyData.filter(item => item.unit === unit);
  currentIndex = 0;
  localStorage.setItem("selectedVocabularyUnit", unit);
  renderCurrentWord();
  renderWordList();
  renderOverview();
}

function renderCurrentWord() {
  if (!currentUnitWords.length) return;
  const word = currentUnitWords[currentIndex];
  const flashcard = $("#flashcard");
  flashcard?.classList.remove("flipped");

  const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  setText("#flashUnitName", word.unit);
  setText("#englishWord", word.englishWord);
  setText("#pronunciation", word.pronunciation || "Chưa có phiên âm");
  setText("#vietnameseMeaning", word.vietnameseMeaning);

  const example = getExampleData(word);
  setText("#exampleText", example.english);
  setText("#exampleMeaningText", example.vietnamese);
  setText("#typingExampleText", example.english);
  setText("#typingExampleMeaning", example.vietnamese);
  setText("#typingUnitName", word.unit);
  setText("#typingPosition", `Từ ${currentIndex + 1}/${currentUnitWords.length}`);
  setText("#typingMeaning", word.vietnameseMeaning);
  const typingInput = $("#typingInput");
  if (typingInput) typingInput.value = "";
  resetTypingState();
  updateProgress();
  highlightActiveWord();
}

function updateProgress() {
  const total = currentUnitWords.length;
  const current = total ? currentIndex + 1 : 0;
  const percent = total ? (current / total) * 100 : 0;
  const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  setText("#totalWords", vocabularyData.length);
  setText("#unitCount", `${total} từ`);
  setText("#progressText", `${current}/${total}`);
  const progressBar = $("#progressBar");
  if (progressBar) progressBar.style.width = `${percent}%`;
}

function clearAutoNextTimer() {
  if (!autoNextTimer) return;
  clearTimeout(autoNextTimer);
  autoNextTimer = null;
}

function nextWord() {
  if (!currentUnitWords.length) return;
  clearAutoNextTimer();
  currentIndex = (currentIndex + 1) % currentUnitWords.length;
  renderCurrentWord();
}

function prevWord() {
  if (!currentUnitWords.length) return;
  clearAutoNextTimer();
  currentIndex = (currentIndex - 1 + currentUnitWords.length) % currentUnitWords.length;
  renderCurrentWord();
}

function speakQueue(items, { cancel = true, gap = 140 } = {}) {
  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt của bạn chưa hỗ trợ Web Speech API.");
    return Promise.resolve(false);
  }
  const queue = items
    .map(item => typeof item === "string" ? { text: item } : item)
    .filter(item => item && String(item.text || "").trim());
  if (!queue.length) return Promise.resolve(true);
  if (cancel) window.speechSynthesis.cancel();
  return new Promise(resolve => {
    let index = 0;
    const speakNext = () => {
      if (index >= queue.length) {
        resolve(true);
        return;
      }
      const item = queue[index++];
      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.lang = item.lang || "en-US";
      utterance.rate = item.rate || 0.82;
      utterance.pitch = item.pitch || 1;
      utterance.volume = item.volume || 1;
      utterance.onend = () => setTimeout(speakNext, item.gap ?? gap);
      utterance.onerror = () => setTimeout(speakNext, item.gap ?? gap);
      window.speechSynthesis.speak(utterance);
    };
    speakNext();
  });
}

function speakText(text) {
  return speakQueue([text]);
}

function speakCurrentWord() {
  const word = currentUnitWords[currentIndex];
  if (word) speakText(getExampleKeyword(word.englishWord));
}

function speakCurrentExample() {
  const word = currentUnitWords[currentIndex];
  if (word) speakText(getExampleData(word).english);
}

function stopIpaAudio() {
  if (currentIpaAudioContext && currentIpaAudioContext.state !== "closed") {
    currentIpaAudioContext.close().catch(() => {});
  }
  currentIpaAudioContext = null;
}

async function playSyntheticIpaSound(sound) {
  const profile = ipaAudioProfiles[sound.symbol];
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!profile || !AudioContextClass) return Promise.resolve(false);

  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  stopIpaAudio();

  const ctx = new AudioContextClass();
  currentIpaAudioContext = ctx;
  if (ctx.state === "suspended") {
    await ctx.resume().catch(() => {});
  }
  const now = ctx.currentTime;
  const duration = profile.duration || 0.72;
  const end = now + duration;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.72, now + 0.045);
  master.gain.setValueAtTime(0.72, Math.max(now + 0.08, end - 0.14));
  master.gain.exponentialRampToValueAtTime(0.0001, end);

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-20, now);
  compressor.knee.setValueAtTime(18, now);
  compressor.ratio.setValueAtTime(6, now);
  compressor.attack.setValueAtTime(0.003, now);
  compressor.release.setValueAtTime(0.18, now);

  const outputBoost = ctx.createGain();
  outputBoost.gain.setValueAtTime(2.4, now);

  master.connect(compressor);
  compressor.connect(outputBoost);
  outputBoost.connect(ctx.destination);

  const source = ctx.createOscillator();
  source.type = "sawtooth";
  source.frequency.setValueAtTime(125, now);
  source.frequency.linearRampToValueAtTime(132, end);

  const startFormants = Array.isArray(profile.formants[0]) ? profile.formants[0] : profile.formants;
  const endFormants = Array.isArray(profile.formants[0]) ? profile.formants[1] : profile.formants;
  const gains = [1, 0.54, 0.28];

  startFormants.forEach((freq, index) => {
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = index === 0 ? 10 : 14;
    filter.frequency.setValueAtTime(freq, now);
    filter.frequency.linearRampToValueAtTime(endFormants[index] || freq, end);

    const gain = ctx.createGain();
    gain.gain.value = gains[index] || 0.18;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
  });

  source.start(now);
  source.stop(end);

  return new Promise(resolve => {
    source.onended = () => {
      if (currentIpaAudioContext === ctx) currentIpaAudioContext = null;
      ctx.close().catch(() => {});
      resolve(true);
    };
  });
}

function getIpaExampleWords(sound) {
  return sound.examples
    .split(",")
    .map(word => word.trim())
    .filter(Boolean)
    .slice(0, 4);
}

async function playIpaPronunciation(sound, includeExamples = true) {
  const playedSynthetic = await playSyntheticIpaSound(sound);
  if (!playedSynthetic) {
    await speakQueue([
      { text: sound.soundCue || sound.word, rate: 0.5, volume: 1, pitch: 1.08, gap: 90 },
      { text: sound.soundCue || sound.word, rate: 0.5, volume: 1, pitch: 1.08, gap: 140 },
      { text: sound.word, rate: 0.68, volume: 1, gap: 160 }
    ]);
  }

  if (!includeExamples) return;
  const exampleWords = getIpaExampleWords(sound);
  if (!exampleWords.length) return;
  await new Promise(resolve => setTimeout(resolve, 260));
  speakQueue(exampleWords.map(word => ({ text: word, rate: 0.74, volume: 1, gap: 240 })));
}

function switchMode(mode) {
  currentMode = mode;
  const isFlashcard = mode === "flashcard";
  $("#flashcardSection")?.classList.toggle("hidden", !isFlashcard);
  $("#typingSection")?.classList.toggle("hidden", isFlashcard);
  $("#listPanel")?.classList.toggle("hidden", !isFlashcard);
  $("#flashcardModeBtn")?.classList.toggle("active", isFlashcard);
  $("#typingModeBtn")?.classList.toggle("active", !isFlashcard);
  resetTypingState();
  if (!isFlashcard) $("#typingInput")?.focus();
}

function updateAutoNextButton() {
  const autoNextBtn = $("#autoNextBtn");
  if (!autoNextBtn) return;
  autoNextBtn.textContent = autoNextEnabled ? "Auto chuyển: Bật" : "Auto chuyển: Tắt";
  autoNextBtn.classList.toggle("active", autoNextEnabled);
  autoNextBtn.setAttribute("aria-pressed", String(autoNextEnabled));
}

function toggleAutoNext() {
  autoNextEnabled = !autoNextEnabled;
  localStorage.setItem("typingAutoNextEnabled", String(autoNextEnabled));
  clearAutoNextTimer();
  updateAutoNextButton();
  if (currentMode === "typing") $("#typingInput")?.focus();
}

function resetTypingState() {
  clearAutoNextTimer();
  const typingInput = $("#typingInput");
  typingInput?.classList.remove("correct", "wrong");
  const feedback = $("#typingFeedback");
  if (feedback) {
    feedback.textContent = "";
    feedback.className = "feedback";
  }
  $("#typingExampleBox")?.classList.add("hidden");
}

function checkTypingAnswer() {
  const word = currentUnitWords[currentIndex];
  const typingInput = $("#typingInput");
  if (!word || !typingInput) return;
  const userAnswer = normalizeAnswer(typingInput.value);
  const acceptedAnswers = getAcceptedAnswers(word.englishWord);
  resetTypingState();
  if (!userAnswer) return;
  const isCorrect = acceptedAnswers.includes(userAnswer);
  const isPossiblePrefix = acceptedAnswers.some(answer => answer.startsWith(userAnswer));
  const feedback = $("#typingFeedback");

  if (isCorrect) {
    typingInput.classList.add("correct");
    if (feedback) {
      feedback.textContent = autoNextEnabled ? "Chính xác! 2 giây nữa app sẽ tự chuyển sang từ tiếp theo." : "Chính xác! Bạn có thể xem ví dụ bên dưới rồi bấm Từ tiếp theo.";
      feedback.classList.add("success");
    }
    $("#typingExampleBox")?.classList.remove("hidden");
    if (autoNextEnabled) {
      autoNextTimer = setTimeout(() => {
        autoNextTimer = null;
        nextWord();
        if (currentMode === "typing") $("#typingInput")?.focus();
      }, 2000);
    }
    return;
  }

  if (!isPossiblePrefix) {
    typingInput.classList.add("wrong");
    if (feedback) {
      feedback.textContent = "Chưa đúng, thử lại nhé.";
      feedback.classList.add("error");
    }
  }
}

function showAnswer() {
  const word = currentUnitWords[currentIndex];
  const feedback = $("#typingFeedback");
  if (!word || !feedback) return;
  feedback.textContent = `Đáp án: ${getBaseWord(word.englishWord)}`;
  feedback.className = "feedback error";
  $("#typingExampleBox")?.classList.remove("hidden");
}

function shuffleCurrentWords() {
  currentUnitWords = shuffleArray(currentUnitWords);
  currentIndex = 0;
  renderCurrentWord();
  renderWordList();
}

function renderWordList() {
  const wordList = $("#wordList");
  if (!wordList) return;
  wordList.innerHTML = currentUnitWords.map((item, index) => `
    <div class="word-list-item ${index === currentIndex ? "active" : ""}">
      <button type="button" data-index="${index}">${item.englishWord}</button>
      <small>${index + 1}</small>
    </div>
  `).join("");
}

function highlightActiveWord() {
  $$(".word-list-item").forEach((item, index) => item.classList.toggle("active", index === currentIndex));
}

function initVocabulary() {
  renderUnits();
  const unitSelect = $("#unitSelect");
  if (unitSelect) {
    unitSelect.addEventListener("change", event => loadUnit(event.target.value));
    loadUnit(unitSelect.value);
  }
  $("#flashcard")?.addEventListener("click", () => $("#flashcard")?.classList.toggle("flipped"));
  $("#flashcard")?.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") $("#flashcard")?.classList.toggle("flipped");
  });
  $("#speakBtn")?.addEventListener("click", event => { event.stopPropagation(); speakCurrentWord(); });
  $("#speakExampleBtn")?.addEventListener("click", event => { event.stopPropagation(); speakCurrentExample(); });
  $("#prevBtn")?.addEventListener("click", prevWord);
  $("#nextBtn")?.addEventListener("click", nextWord);
  $("#shuffleBtn")?.addEventListener("click", shuffleCurrentWords);
  $("#flashcardModeBtn")?.addEventListener("click", () => switchMode("flashcard"));
  $("#typingModeBtn")?.addEventListener("click", () => switchMode("typing"));
  $("#typingInput")?.addEventListener("input", checkTypingAnswer);
  $("#typingInput")?.addEventListener("keydown", event => { if (event.key === "Enter") checkTypingAnswer(); });
  $("#checkBtn")?.addEventListener("click", checkTypingAnswer);
  $("#typingPrevBtn")?.addEventListener("click", prevWord);
  $("#autoNextBtn")?.addEventListener("click", toggleAutoNext);
  $("#typingNextBtn")?.addEventListener("click", nextWord);
  $("#showAnswerBtn")?.addEventListener("click", showAnswer);
  $("#wordList")?.addEventListener("click", event => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    currentIndex = Number(button.dataset.index);
    renderCurrentWord();
  });
  document.addEventListener("keydown", event => {
    if (event.target === $("#typingInput") || currentPage !== "vocabulary") return;
    if (event.key === "ArrowRight") nextWord();
    if (event.key === "ArrowLeft") prevWord();
  });
  updateAutoNextButton();
}

function renderGrammarList() {
  const list = $("#grammarList");
  if (!list) return;
  const category = $("#grammarCategorySelect")?.value || "all";
  const sort = $("#grammarSortSelect")?.value || "order";
  let items = grammarData.filter(item => category === "all" || item.category === category);
  if (sort === "progress") items = items.sort((a, b) => grammarProgress(b) - grammarProgress(a));
  if (sort === "name") items = items.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "order") items = items.sort((a, b) => a.order - b.order);

  list.innerHTML = items.map(item => {
    const progress = grammarProgress(item);
    const statusClass = progress >= 100 ? "mastered" : progress > 0 ? "progress" : "todo";
    const statusText = progress >= 100 ? "Mastered" : progress > 0 ? "In Progress" : "Not Started";
    return `
      <article class="grammar-card ${item.id === selectedGrammarId ? "active" : ""}" data-grammar-id="${item.id}">
        <div class="grammar-card-top">
          <div>
            <span class="category-badge">${item.category === "present" ? "Hiện tại" : item.category === "past" ? "Quá khứ" : "Tương lai"}</span>
            <h3>Unit ${item.order}: ${item.title}</h3>
          </div>
          <span class="status-badge ${statusClass}">${statusText}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
        <div class="progress-top"><span>${item.vi}</span><strong>${progress}%</strong></div>
      </article>
    `;
  }).join("");
}

function renderGrammarDetail() {
  const detail = $("#grammarDetail");
  if (!detail) return;
  const item = getGrammarById(selectedGrammarId);
  const progress = grammarProgress(item);
  detail.innerHTML = `
    <span class="category-badge">Cheat Sheet: Unit ${item.order}</span>
    <h2>${item.title}</h2>
    <p class="subtitle-muted">${item.vi}</p>
    <div class="cheat-box">
      <strong>Công thức cần nhớ</strong>
      <div class="formula">${item.formula.map(line => `<code>${line}</code>`).join("")}</div>
    </div>
    <div class="cheat-box">
      <strong>Cách dùng đời thật</strong>
      <ul class="info-list">${item.realUse.map(line => `<li>${line}</li>`).join("")}</ul>
    </div>
    <div class="cheat-box">
      <strong>Dấu hiệu thường gặp</strong>
      <p>${item.signals.map(signal => `<span class="category-badge">${signal}</span>`).join(" ")}</p>
    </div>
    <div class="cheat-box">
      <strong>Ví dụ chân thật</strong>
      ${item.examples.map(([en, vi]) => `<div class="example-sentence"><strong>${en}</strong><span>${vi}</span></div>`).join("")}
    </div>
    <div class="cheat-box">
      <strong>So sánh nhanh</strong>
      <p>${item.compare}</p>
    </div>
    <div class="cheat-box">
      <strong>Lỗi hay sai</strong>
      <ul class="info-list">${item.mistakes.map(line => `<li>${line}</li>`).join("")}</ul>
    </div>
    <div class="detail-actions">
      <button class="secondary-btn" type="button" data-mark-grammar="${item.id}">${progress >= 100 ? "Đã học xong" : "Đánh dấu đã học"}</button>
      <button class="primary-btn" type="button" data-grammar-test="${item.id}">Làm test thì này</button>
    </div>
  `;
}

function renderTestTenseOptions() {
  const select = $("#testTenseSelect");
  if (!select) return;
  select.innerHTML = grammarData.map(item => `<option value="${item.id}">Unit ${item.order}: ${item.title}</option>`).join("");
  select.value = selectedGrammarId;
}

function initGrammar() {
  renderGrammarList();
  renderGrammarDetail();
  renderTestTenseOptions();
  $("#grammarCategorySelect")?.addEventListener("change", renderGrammarList);
  $("#grammarSortSelect")?.addEventListener("change", renderGrammarList);
  $("#grammarList")?.addEventListener("click", event => {
    const card = event.target.closest(".grammar-card");
    if (!card) return;
    selectedGrammarId = card.dataset.grammarId;
    localStorage.setItem("selectedGrammarId", selectedGrammarId);
    renderGrammarList();
    renderGrammarDetail();
  });
  $("#grammarDetail")?.addEventListener("click", event => {
    const markButton = event.target.closest("[data-mark-grammar]");
    const testButton = event.target.closest("[data-grammar-test]");
    if (markButton) {
      appState.grammarMastered[markButton.dataset.markGrammar] = true;
      saveState();
      renderGrammarList();
      renderGrammarDetail();
      renderOverview();
    }
    if (testButton) {
      selectedGrammarId = testButton.dataset.grammarTest;
      localStorage.setItem("selectedGrammarId", selectedGrammarId);
      setPage("tests");
      const mode = $("#testModeSelect");
      const tense = $("#testTenseSelect");
      if (mode) mode.value = "single";
      if (tense) tense.value = selectedGrammarId;
      updateTestModeVisibility();
      startQuiz("single", selectedGrammarId, 10);
    }
  });
}

function renderWordForm() {
  const grid = $("#wordFormGrid");
  if (!grid) return;
  grid.innerHTML = wordFormData.map(section => `
    <article class="wordform-card">
      <h3><span>${section.icon}</span>${section.title}</h3>
      <div class="wordform-table-wrap" tabindex="0" aria-label="Bảng ${section.title}">
        <table class="wordform-table">
          <thead><tr><th>Dạng</th><th>Ví dụ</th><th>Ý nghĩa</th></tr></thead>
          <tbody>${section.rows.map(row => `<tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </article>
  `).join("");
  renderWordFormPractice();
}

function renderWordFormPractice() {
  const box = $("#wordFormPractice");
  if (!box) return;
  const q = wordFormQuestions[wordFormQuizIndex % wordFormQuestions.length];
  box.innerHTML = `
    <p class="eyebrow">Mini Quiz</p>
    <h2>${q.question}</h2>
    <div class="wordform-options">${q.options.map((option, index) => `<button type="button" data-wordform-answer="${index}">${option}</button>`).join("")}</div>
    <p id="wordFormFeedback" class="feedback"></p>
  `;
}

function initWordForm() {
  renderWordForm();
  $("#startWordFormQuizBtn")?.addEventListener("click", () => {
    wordFormQuizIndex = Math.floor(Math.random() * wordFormQuestions.length);
    renderWordFormPractice();
    $("#wordFormPractice")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#wordFormPractice")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-wordform-answer]");
    if (!btn) return;
    const q = wordFormQuestions[wordFormQuizIndex % wordFormQuestions.length];
    const answer = Number(btn.dataset.wordformAnswer);
    const feedback = $("#wordFormFeedback");
    $$("[data-wordform-answer]").forEach(button => button.disabled = true);
    if (answer === q.answer) {
      btn.classList.add("correct");
      if (feedback) {
        feedback.textContent = `Đúng! ${q.explain}`;
        feedback.className = "feedback success";
      }
    } else {
      btn.classList.add("wrong");
      const correctBtn = $(`[data-wordform-answer="${q.answer}"]`);
      correctBtn?.classList.add("correct");
      if (feedback) {
        feedback.textContent = `Chưa đúng. ${q.explain}`;
        feedback.className = "feedback error";
      }
    }
    setTimeout(() => {
      wordFormQuizIndex = (wordFormQuizIndex + 1) % wordFormQuestions.length;
      renderWordFormPractice();
    }, 2200);
  });
}

function renderIpaChart() {
  const chart = $("#ipaChart");
  if (!chart) return;
  chart.innerHTML = ipaData.map(section => `
    <section class="ipa-section ${section.className}">
      <h3>${section.group}</h3>
      <div class="sound-grid">
        ${section.sounds.map(sound => `<button class="sound-btn ${sound.symbol === selectedSound.symbol ? "active" : ""}" type="button" data-sound="${sound.symbol}">${sound.symbol}</button>`).join("")}
      </div>
    </section>
  `).join("");
  renderIpaDetail();
}

function renderIpaDetail() {
  const detail = $("#ipaDetail");
  if (!detail) return;
  detail.innerHTML = `
    <h3>Sound Details: ${selectedSound.symbol}</h3>
    <div class="sound-symbol">${selectedSound.symbol}</div>
    <p class="ipa-hint">Bấm <strong>Nghe âm IPA</strong> để nghe âm mẫu trước, sau đó có thể nghe các từ ví dụ.</p>
    <div class="sound-examples">
      <strong>Example words:</strong><br />${selectedSound.examples}
    </div>
    <div class="mouth-card">${selectedSound.tip}</div>
    <div class="sound-actions">
      <button id="playIpaOnlyBtn" class="secondary-btn" type="button">Nghe âm IPA</button>
      <button id="playSoundBtn" class="primary-btn" type="button">Nghe âm + ví dụ</button>
    </div>
  `;
  $("#playIpaOnlyBtn")?.addEventListener("click", () => playIpaPronunciation(selectedSound, false));
  $("#playSoundBtn")?.addEventListener("click", () => playIpaPronunciation(selectedSound, true));
}

function initIpa() {
  renderIpaChart();
  $("#ipaChart")?.addEventListener("click", event => {
    const button = event.target.closest("[data-sound]");
    if (!button) return;
    for (const section of ipaData) {
      const found = section.sounds.find(sound => sound.symbol === button.dataset.sound);
      if (found) selectedSound = found;
    }
    renderIpaChart();
    playIpaPronunciation(selectedSound, false);
  });
}

function updateTestModeVisibility() {
  const mode = $("#testModeSelect")?.value || "mixed";
  const label = $("#testTenseLabel");
  if (label) label.style.display = mode === "single" ? "block" : "none";
}

function buildQuizQuestions(mode, tenseId, count) {
  let pool;
  if (mode === "mistakes") {
    pool = appState.mistakes.map(item => ({ ...item }));
  } else if (mode === "single") {
    pool = grammarQuestions.filter(question => question.tenseId === tenseId);
  } else {
    pool = grammarQuestions;
  }
  if (!pool.length) pool = grammarQuestions;
  const shuffled = shuffleArray(pool);
  const result = [];
  for (let i = 0; i < count; i++) {
    const q = shuffled[i % shuffled.length];
    result.push({ ...q, quizId: `${q.tenseId}-${i}-${Math.random().toString(16).slice(2)}` });
  }
  return result;
}

function formatTimer(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startQuiz(mode, tenseId, count) {
  const questions = buildQuizQuestions(mode, tenseId, Number(count));
  currentQuiz = {
    mode,
    tenseId,
    title: mode === "single" ? `${getGrammarById(tenseId).title} Test` : mode === "mistakes" ? "Ôn lại lỗi sai" : "Mixed Tenses Review Test",
    questions,
    answers: Array(questions.length).fill(null),
    current: 0,
    startedAt: Date.now(),
    submitted: false,
    timer: null
  };
  $("#quizSetup")?.classList.add("hidden");
  $("#quizResult")?.classList.add("hidden");
  $("#quizBox")?.classList.remove("hidden");
  if (currentQuiz.timer) clearInterval(currentQuiz.timer);
  currentQuiz.timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - currentQuiz.startedAt) / 1000);
    const timer = $("#quizTimer");
    if (timer) timer.textContent = formatTimer(elapsed);
  }, 500);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (!currentQuiz) return;
  const q = currentQuiz.questions[currentQuiz.current];
  const selected = currentQuiz.answers[currentQuiz.current];
  const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  setText("#quizTitle", `Destination B1 - ${currentQuiz.title}`);
  setText("#questionType", q.type || "Question");
  setText("#questionText", `Question ${currentQuiz.current + 1}: ${q.question}`);
  setText("#quizCounter", `Câu ${currentQuiz.current + 1}/${currentQuiz.questions.length}`);
  const bar = $("#quizProgressBar");
  if (bar) bar.style.width = `${((currentQuiz.current + 1) / currentQuiz.questions.length) * 100}%`;
  const options = $("#optionsList");
  if (options) {
    options.innerHTML = q.options.map((option, index) => {
      let cls = "option-btn";
      if (selected === index) cls += " selected";
      if (currentQuiz.submitted && index === q.answer) cls += " correct";
      if (currentQuiz.submitted && selected === index && selected !== q.answer) cls += " wrong";
      return `<button class="${cls}" type="button" data-option="${index}">${String.fromCharCode(65 + index)}) ${option}</button>`;
    }).join("");
  }
  const explain = $("#questionExplain");
  if (explain) {
    explain.classList.toggle("hidden", !currentQuiz.submitted);
    explain.innerHTML = currentQuiz.submitted ? `<strong>Giải thích:</strong> ${q.explain}` : "";
  }
  renderQuizNavigator();
}

function renderQuizNavigator() {
  const nav = $("#quizNavigator");
  if (!nav || !currentQuiz) return;
  nav.innerHTML = currentQuiz.questions.map((q, index) => {
    let cls = "nav-dot";
    if (index === currentQuiz.current) cls += " current";
    if (currentQuiz.answers[index] !== null) cls += " answered";
    if (currentQuiz.submitted && currentQuiz.answers[index] !== q.answer) cls += " wrong";
    return `<button class="${cls}" type="button" data-jump-question="${index}">${index + 1}</button>`;
  }).join("");
}

function chooseOption(index) {
  if (!currentQuiz || currentQuiz.submitted) return;
  currentQuiz.answers[currentQuiz.current] = index;
  renderQuizQuestion();
}

function submitQuiz() {
  if (!currentQuiz || currentQuiz.submitted) return;
  currentQuiz.submitted = true;
  clearInterval(currentQuiz.timer);
  const correct = currentQuiz.questions.reduce((sum, q, index) => sum + (currentQuiz.answers[index] === q.answer ? 1 : 0), 0);
  const score = Math.round((correct / currentQuiz.questions.length) * 100);
  const key = currentQuiz.mode === "single" ? currentQuiz.tenseId : currentQuiz.mode;
  appState.scores[key] = Math.max(appState.scores[key] || 0, score);
  if (currentQuiz.mode === "single" && score >= 80) appState.grammarMastered[currentQuiz.tenseId] = true;

  const wrongItems = currentQuiz.questions
    .map((q, index) => ({ q, selected: currentQuiz.answers[index] }))
    .filter(item => item.selected !== item.q.answer)
    .map(item => ({ ...item.q, savedAt: new Date().toISOString(), selected: item.selected }));
  const existing = appState.mistakes.filter(old => !wrongItems.some(item => item.question === old.question));
  appState.mistakes = [...wrongItems, ...existing].slice(0, 40);
  saveState();
  renderQuizQuestion();
  renderQuizResult(correct, score);
  renderOverview();
  renderGrammarList();
  renderGrammarDetail();
}

function renderQuizResult(correct, score) {
  if (!currentQuiz) return;
  const box = $("#quizResult");
  if (!box) return;
  box.classList.remove("hidden");
  const total = currentQuiz.questions.length;
  const wrongReview = currentQuiz.questions
    .map((q, index) => ({ q, index, selected: currentQuiz.answers[index] }))
    .filter(item => item.selected !== item.q.answer)
    .map(item => `
      <div class="review-item">
        <strong>Câu ${item.index + 1}: ${item.q.question}</strong>
        <p>Đáp án đúng: ${item.q.options[item.q.answer]}</p>
        <small>${item.q.explain}</small>
      </div>
    `).join("") || `<div class="review-item"><strong>Tuyệt vời!</strong><p>Bạn không sai câu nào.</p></div>`;

  box.innerHTML = `
    <p class="eyebrow">Kết quả</p>
    <div class="result-score">${score}%</div>
    <h2>${correct}/${total} câu đúng</h2>
    <p>${score >= 80 ? "Đạt mục tiêu. Phần này có thể xem là đã nắm khá chắc." : "Nên ôn lại sổ tay lỗi sai rồi làm lại bài test."}</p>
    <div class="hero-actions">
      <button class="primary-btn" type="button" id="retryQuizBtn">Làm lại dạng này</button>
      <button class="secondary-btn" type="button" id="newMixedQuizBtn">Test xáo trộn</button>
    </div>
    <div class="review-list">${wrongReview}</div>
  `;
  box.scrollIntoView({ behavior: "smooth", block: "start" });
  $("#retryQuizBtn")?.addEventListener("click", () => startQuiz(currentQuiz.mode, currentQuiz.tenseId, currentQuiz.questions.length));
  $("#newMixedQuizBtn")?.addEventListener("click", () => startQuiz("mixed", null, Number($("#testCountSelect")?.value || 10)));
}

function exitQuiz() {
  if (currentQuiz?.timer) clearInterval(currentQuiz.timer);
  currentQuiz = null;
  $("#quizBox")?.classList.add("hidden");
  $("#quizResult")?.classList.add("hidden");
  $("#quizSetup")?.classList.remove("hidden");
}

function initQuiz() {
  renderTestTenseOptions();
  updateTestModeVisibility();
  $("#testModeSelect")?.addEventListener("change", updateTestModeVisibility);
  $("#startQuizBtn")?.addEventListener("click", () => {
    const mode = $("#testModeSelect")?.value || "mixed";
    const tenseId = $("#testTenseSelect")?.value || selectedGrammarId;
    const count = Number($("#testCountSelect")?.value || 10);
    startQuiz(mode, tenseId, count);
  });
  $("#optionsList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-option]");
    if (btn) chooseOption(Number(btn.dataset.option));
  });
  $("#quizNavigator")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-jump-question]");
    if (!btn || !currentQuiz) return;
    currentQuiz.current = Number(btn.dataset.jumpQuestion);
    renderQuizQuestion();
  });
  $("#prevQuestionBtn")?.addEventListener("click", () => {
    if (!currentQuiz) return;
    currentQuiz.current = Math.max(0, currentQuiz.current - 1);
    renderQuizQuestion();
  });
  $("#nextQuestionBtn")?.addEventListener("click", () => {
    if (!currentQuiz) return;
    currentQuiz.current = Math.min(currentQuiz.questions.length - 1, currentQuiz.current + 1);
    renderQuizQuestion();
  });
  $("#submitQuizBtn")?.addEventListener("click", submitQuiz);
  $("#exitQuizBtn")?.addEventListener("click", exitQuiz);
}

function renderOverview() {
  const learnedCount = grammarData.filter(isGrammarMastered).length;
  const bestScore = Object.values(appState.scores).length ? Math.max(...Object.values(appState.scores)) : 0;
  const vocabUnits = new Set(vocabularyData.map(item => item.unit)).size;
  const coursePercent = clampPercent(((learnedCount / grammarData.length) * 55) + (bestScore * 0.25) + 20);
  const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  setText("#overviewTotalWords", vocabularyData.length);
  setText("#overviewGrammarCount", grammarData.length);
  setText("#overviewBestScore", `${bestScore}%`);
  setText("#overviewMistakes", appState.mistakes.length);
  setText("#grammarPointCard", learnedCount * 75 + bestScore);
  setText("#coursePercent", `${coursePercent}%`);
  setText("#courseSubtitle", `${learnedCount}/${grammarData.length} thì đã học • ${vocabUnits} unit từ vựng`);
  setText("#streakCount", `🔥 ${appState.streakDays.length}`);
  const courseBar = $("#courseProgressBar");
  if (courseBar) courseBar.style.width = `${coursePercent}%`;

  const plan = $("#studyPlan");
  if (plan) {
    const nextGrammar = grammarData.find(g => !isGrammarMastered(g)) || grammarData[0];
    plan.innerHTML = `
      <div class="plan-item"><div class="plan-icon">📘</div><div><strong>Ôn 15 từ vựng</strong><p>Vào mục Từ vựng, bật Điền từ và Auto chuyển để luyện nhanh.</p></div></div>
      <div class="plan-item"><div class="plan-icon">✍️</div><div><strong>Học ${nextGrammar.title}</strong><p>Đọc cách dùng đời thật, xem ví dụ rồi bấm làm test thì này.</p></div></div>
      <div class="plan-item"><div class="plan-icon">🧪</div><div><strong>Làm Mixed Test</strong><p>Xáo trộn các thì giúp phát hiện phần còn yếu.</p></div></div>
    `;
  }
  renderMistakes();
}

function renderMistakes() {
  const list = $("#mistakeList");
  if (!list) return;
  if (!appState.mistakes.length) {
    list.className = "mistake-list empty-state";
    list.textContent = "Chưa có lỗi sai nào. Làm test để app tự lưu câu cần ôn.";
    return;
  }
  list.className = "mistake-list";
  list.innerHTML = appState.mistakes.slice(0, 8).map(item => `
    <div class="mistake-item">
      <strong>${item.question}</strong>
      <small>Đáp án đúng: ${item.options[item.answer]} — ${item.explain}</small>
    </div>
  `).join("");
}

function initSettings() {
  if (appState.theme === "dark") document.body.classList.add("dark");
  $("#themeToggleBtn")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    appState.theme = document.body.classList.contains("dark") ? "dark" : "light";
    saveState();
  });
  $("#resetProgressBtn")?.addEventListener("click", () => {
    if (!confirm("Bạn chắc chắn muốn reset toàn bộ tiến độ học?")) return;
    appState = defaultState();
    saveState();
    renderOverview();
    renderGrammarList();
    renderGrammarDetail();
    exitQuiz();
  });
  $("#clearMistakesBtn")?.addEventListener("click", () => {
    appState.mistakes = [];
    saveState();
    renderOverview();
  });
}

function initApp() {
  touchStreak();
  initNavigation();
  initVocabulary();
  initGrammar();
  initWordForm();
  initIpa();
  initQuiz();
  initSettings();
  renderOverview();
  setPage("overview");
}

initApp();
