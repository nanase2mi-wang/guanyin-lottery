// ============================================================
// 觀音靈籤資料（第 1 首至第 100 首）
// ============================================================
const LOTTERY_DATA = [
  { no: 1, title: "漢劉邦遇信", level: "上籤 (大吉)", poem: "菩薩慈悲大願心，\n勤修福德報恩深。\n自有神明來護佑，\n萬事如意喜相親。" },
  { no: 2, title: "姜太公釣魚", level: "中籤", poem: "憂愁常鎖兩眉尖，\n千頭萬緒未得安。\n須待明月重照耀，\n暗中方見有生還。" },
  { no: 3, title: "董永賣身", level: "下籤", poem: "眼前枯木己生華，\n何事逢春卻生發。\n若逢吉日多慶賀，\n貴人相引得榮華。" },
  { no: 4, title: "紅拂女私奔", level: "中籤", poem: "營謀作事不如意，\n終是有成莫疑猜。\n若得貴人提挈處，\n自然福祿自天來。" },
  { no: 5, title: "蘇秦不第", level: "下籤", poem: "一朝榮貴出頭來，\n須信能行步步高。\n自有貴人相扶助，\n財源廣進自滔滔。" },
  { no: 6, title: "李世民遊冥", level: "中籤", poem: "風雷動處必生威，\n萬物逢春總見輝。\n若得貴人多力扶，\n從此通達無所疑。" },
  { no: 7, title: "蘇武牧羊", level: "中籤", poem: "奔波勞碌甚堪憐，\n凡事謀望未如願。\n幸得祖宗陰騭在，\n逢凶化吉保平安。" },
  { no: 8, title: "許負定風水", level: "中籤", poem: "茂林松柏正芳春，\n萬事吉慶喜氣新。\n若得貴人提攜處，\n自然福祿自天臻。" },
  { no: 9, title: "趙子龍救阿斗", level: "下籤", poem: "看君來往奔波苦，\n爭奈時運未遇時。\n到底中間無大害，\n任君隨意去施為。" },
  { no: 10, title: "武則天登位", level: "中籤", poem: "石藏無價玉和珍，\n只管他鄉外客尋。\n把作一般看看待，\n登時貴顯受皇恩。" },
  { no: 11, title: "董永遇仙", level: "中籤", poem: "欲求勝事可非常，\n爭奈親姻日短長。\n到底中間無大害，\n任君隨意去平章。" },
  { no: 12, title: "蔡順賣母", level: "中籤", poem: "石中藏玉有誰知，\n要得良工細細推。\n一旦雕琢成大器，\n方知此物是珍奇。" },
  { no: 13, title: "呂洞賓試石榴", level: "下籤", poem: "教君作事莫茫然，\n須信人人各有緣。\n時來風送滕王閣，\n運去雷轟荐福碑。" },
  { no: 14, title: "曹操納降關羽", level: "下籤", poem: "過去事已莫追論，\n從今以後改前愆。\n若得貴人提挈處，\n自然福祿自天安。" },
  { no: 15, title: "蘇秦拜相", level: "中籤", poem: "行人發跡在明時，\n策馬揚鞭自有期。\n莫向平原空嘆息，\n終須遇合喜相隨。" },
  { no: 16, title: "賈島尋僧", level: "中籤", poem: "擊鼓鳴鑼喜氣生，\n眼前財寶自然成。\n貴人扶助多吉慶，\n萬事如意大亨通。" },
  { no: 17, title: "劉備三顧茅廬", level: "中籤", poem: "莫聽閒言與是非，\n晨昏只好念阿彌。\n若還妄作生心念，\n必有災殃禍及時。" },
  { no: 18, title: "十八學士登瀛洲", level: "上籤 (大吉)", poem: "金烏西墜兔兒升，\n幾度人間歲月增。\n萬事回頭看轉背，\n相逢大吉慶重重。" },
  { no: 19, title: "劉備過江迎娶孫夫人", level: "中籤", poem: "急水灘頭放釣竿，\n枉費心機力不堪。\n水濁魚頑難上釣，\n恰如無米煮炊飯。" },
  { no: 20, title: "姜太公文王相遇", level: "中籤", poem: "當年悔不聽親言，\n遠涉他鄉去學仙。\n今日重來歸故里，\n方知枉費許多錢。" }, // <-- 這裡補上了逗號
  { no: 21, title: "李旦龍鳳配合", level: "上籤", poem: "陰陽道合總由天，\n女嫁男婚豈偶然。\n但看龍蛇堪運動，\n熊羆叶夢喜團圓。" },
  { no: 22, title: "袁安守困", level: "中籤", poem: "旱秧得雨盡蓬勃，\n霜雪遇太陽化開。\n歡喜賀喜皆有慶，\n何須勞碌向外尋。" },
  { no: 23, title: "孫策以璽借兵", level: "中籤", poem: "欲求勝事可非常，\n爭奈親姻日短長。\n到底中間無大害，\n任君隨意去平章。" },
  { no: 24, title: "張良遇黃石公", level: "下籤", poem: "不算不知理可哀，\n前程有路未開懷。\n若逢貴人相提挈，\n方見花開結子來。" },
  { no: 25, title: "伍子胥過昭關", level: "中籤", poem: "過得魏王波浪急，\n莫嫌進退兩難為。\n須知暗裡明神佑，\n從今以後喜安居。" },
  { no: 26, title: "鍾馗得道", level: "中籤", poem: "運來順水推舟去，\n何必勞心妄作思。\n自有貴人相提拔，\n功名成就自然宜。" },
  { no: 27, title: "劉基歸隱", level: "中籤", poem: "祖宗積德幾多深，\n何用營營去外尋。\n凡事自然皆合意，\n免教勞力更勞心。" },
  { no: 28, title: "李後尋包公", level: "上籤", poem: "太公釣魚八十秋，\n九重天上有神遊。\n逢春發芽逢夏綠，\n喜逢秋實冬收留。" },
  { no: 29, title: "趙子龍救阿斗", level: "中籤", poem: "寶劍出匣耀光明，\n在盒由來未有名。\n今朝試手鋒芒快，\n直上青雲路上行。" },
  { no: 30, title: "韓信功高震主", level: "下籤", poem: "勸君作事莫茫然，\n須知世事有迴旋。\n莫教一朝遭禍至，\n回首方知後悔難。" },
  { no: 31, title: "蘇卿負米", level: "中籤", poem: "忙忙碌碌為誰忙，\n辛苦經營事業長。\n若得貴人來指引，\n自然福祿自天昌。" },
  { no: 32, title: "劉備求賢", level: "上籤", poem: "采薪蕘者向山行，\n偶逢奇寶喜生盈。\n貴人指引登雲路，\n從今門戶自光榮。" },
  { no: 33, title: "咬金招親", level: "中籤", poem: "欲求勝事莫疑猜，\n自有貴人相引來。\n凡事合心皆大吉，\n門庭喜慶自天開。" },
  { no: 34, title: "王昭君和親", level: "下籤", poem: "紅顏薄命堪嗟嘆，\n遠涉異鄉道路難。\n莫聽閒言與是非，\n守舊安分自平安。" },
  { no: 35, title: "唐僧取經", level: "中籤", poem: "歷盡階梯步步高，\n成功指日在今朝。\n貴人相助多方便，\n莫向平途空自勞。" },
  { no: 36, title: "趙匡胤鋪地錦", level: "上籤", poem: "錦繡乾坤氣象新，\n萬物逢春盡吐新。\n貴人相引登高位，\n榮華富貴福無邊。" },
  { no: 37, title: "邵堯夫告天", level: "中籤", poem: "欲求勝事莫心焦，\n守舊安分度順潮。\n若得貴人提攜處，\n自然福祿自相邀。" },
  { no: 38, title: "孟郊中第", level: "上籤", poem: "春雷一聲震天動，\n萬物逢春盡吐新。\n莫道前途無出路，\n貴人引領上青雲。" },
  { no: 39, title: "姜女尋夫", level: "下籤", poem: "千里尋夫萬里關，\n長城萬里盡艱難。\n萬事回頭看轉背，\n空留遺恨在人間。" },
  { no: 40, title: "馬陵道龐涓受戮", level: "下籤", poem: "勸君作事莫貪求，\n強取豪奪到底休。\n若不回頭早思省，\n臨危後悔有何求。" },
  { no: 41, title: "董卓招親", level: "下籤", poem: "無端風雨損花枝，\n心事茫茫未可知。\n若得貴人相救護，\n方知禍去福來隨。" },
  { no: 42, title: "班超投筆從戎", level: "上籤", poem: "大鵬展翅恨天低，\n直上青雲路上飛。\n莫道前程無出路，\n貴人相引自高威。" },
  { no: 43, title: "泗水關韓信拒諫", level: "下籤", poem: "欲求勝事莫強求，\n順理成章自無憂。\n若是不聽忠告語，\n臨危方覺悔當頭。" },
  { no: 44, title: "姜尚過黃河", level: "中籤", poem: "棋逢敵手難相讓，\n勝負分明未可知。\n須待時來風送力，\n自然順水過江池。" },
  { no: 45, title: "張良遇黃石公", level: "上籤", poem: "遇得貴人相指引，\n前途坦蕩自光明。\n凡事合心皆大吉，\n功成名就萬事成。" },
  { no: 46, title: "渭水訪賢", level: "上籤", poem: "君今擇選正當時，\n莫待風吹葉落枝。\n貴人指引登高位，\n榮華富貴自相隨。" },
  { no: 47, title: "梁武帝修道", level: "中籤", poem: "苦心修煉幾多年，\n今日功成正自然。\n莫向平途空自歎，\n貴人相引得昇仙。" },
  { no: 48, title: "韓信掛帥", level: "上籤", poem: "昆侖山上玉無瑕，\n一朝剖出世人誇。\n貴人相提兼相引，\n榮華富貴自豪家。" },
  { no: 49, title: "太子暗度陳倉", level: "下籤", poem: "營謀作事莫輕狂，\n暗裡藏針最難防。\n須防小人背後損，\n守舊安分自無殃。" },
  { no: 50, title: "陶朱歸五湖", level: "中籤", poem: "五湖四海盡行船，\n高掛風帆把舵堅。\n幸得順風隨所至，\n滿船寶貝稱心田。" },
  { no: 51, title: "諸葛公燒藤甲兵", level: "上籤", poem: "錦繡華堂氣象新，\n文章吐鳳呈祥瑞。\n自有貴人相提拔，\n登高一步遠塵埃。" },
  { no: 52, title: "太公家業八十成", level: "中籤", poem: "卓立人群君子身，\n莫教心事染紅塵。\n須知暗裡明神佑，\n自得榮華保一身。" },
  { no: 53, title: "劉備招親", level: "中籤", poem: "失意反成得意時，\n龍門躍過莫疑猜。\n貴人相引登高位，\n榮華富貴自天來。" },
  { no: 54, title: "莊子試妻", level: "下籤", poem: "夢中說夢俱是空，\n葉落秋風莫再追。\n勸君早作回頭計，\n免教臨危惹禍災。" },
  { no: 55, title: "郭曖大賀郭子儀", level: "上籤", poem: "萬里晴空月再明，\n人間處處見光輝。\n貴人相引登高位，\n百事亨通喜自隨。" },
  { no: 56, title: "祿山造反", level: "下籤", poem: "灘小石溪流水急，\n風高浪大船難行。\n勸君守舊安分過，\n莫向險中冒險行。" },
  { no: 57, title: "董卓不聽荀彧言", level: "下籤", poem: "說是說非總不宜，\n莫將利害掛心頭。\n若能退後一步想，\n自然禍去福來臨。" },
  { no: 58, title: "蘇秦背劍", level: "中籤", poem: "奔波勞碌甚堪憐，\n凡事謀望未如願。\n須得貴人來指引，\n自然福祿自天全。" },
  { no: 59, title: "張良退隱", level: "中籤", poem: "功成名就退身早，\n急流勇退是英豪。\n莫向平途貪富貴，\n隨緣安分自悠悠。" },
  { no: 60, title: "姜太公遇文王", level: "上籤", poem: "抱璞守真幾多年，\n一朝獲寶喜自然。\n貴人指引登雲路，\n從今門戶自光彩。" },
  { no: 61, title: "蘇小妹答歌", level: "中籤", poem: "日落西山月又昇，\n人間歲月幾多增。\n萬事回頭看轉背，\n相逢大吉慶重重。" },
  { no: 62, title: "唐僧取經", level: "中籤", poem: "晨昏念佛求真道，\n歷盡艱辛步步高。\n若得貴人相引領，\n自然成功在今朝。" },
  { no: 63, title: "女媧氏煉石補天", level: "中籤", poem: "補天鍊石功夫深，\n凡事謀求要用心。\n幸得貴人相提拔，\n自然福祿自天臻。" },
  { no: 64, title: "馬援討交趾", level: "下籤", poem: "營謀作事莫輕狂，\n暗裡藏針最難防。\n須防小人背後損，\n守舊安分自無殃。" },
  { no: 65, title: "孫龐鬥智", level: "下籤", poem: "兩虎相爭必有一傷，\n強求名利到底忙。\n勸君退後一步想，\n免教臨危受禍殃。" },
  { no: 66, title: "張良受書", level: "上籤", poem: "遇得貴人相指引，\n前途坦蕩自光明。\n凡事合心皆大吉，\n功成名就萬事成。" },
  { no: 67, title: "光武中興", level: "上籤", poem: "掃開烏雲見明月，\n萬物逢春盡吐新。\n貴人相引登高位，\n榮華富貴福無邊。" },
  { no: 68, title: "姜太公八十遇文王", level: "上籤", poem: "太公釣魚八十秋，\n九重天上有神遊。\n逢春發芽逢夏綠，\n喜逢秋實冬收留。" },
  { no: 69, title: "程嬰匿趙氏孤兒", level: "中籤", poem: "忍辱負重求大義，\n莫向平途空自勞。\n須知暗裡明神佑，\n從今以後喜安居。" },
  { no: 70, title: "韓信拒諫", level: "下籤", poem: "勸君作事莫貪求，\n強取豪奪到底休。\n若不回頭早思省，\n臨危後悔有何求。" },
  { no: 71, title: "蘇武還朝", level: "中籤", poem: "歷盡艱辛回到家，\n門前依舊舊時花。\n貴人相引登高位，\n榮華富貴自豪家。" },
  { no: 72, title: "劉備求賢", level: "上籤", poem: "采薪蕘者向山行，\n偶逢奇寶喜生盈。\n貴人指引登雲路，\n從今門戶自光榮。" },
  { no: 73, title: "蕭何月下追韓信", level: "上籤", poem: "追尋賢能不辭勞，\n一朝遇合喜相隨。\n貴人相引登高位，\n榮華富貴自天來。" },
  { no: 74, title: "秦始皇焚書坑儒", level: "下籤", poem: "逆天暴行到底空，\n千古遺恨在人間。\n勸君作事留餘地，\n免教臨危後悔難。" },
  { no: 75, title: "關公約法三章", level: "中籤", poem: "守正不阿大義存，\n忠心耿耿天地知。\n若得貴人提攜處，\n自然福祿自天臻。" },
  { no: 76, title: "孫策伯符借兵", level: "中籤", poem: "借得雄兵平定局，\n前程有路未開懷。\n須知暗裡明神佑，\n從今以後喜安居。" },
  { no: 77, title: "呂布遇貂蟬", level: "下籤", poem: "英雄難過美人關，\n莫聽閒言與是非。\n若還妄作生心念，\n必有災殃禍及時。" },
  { no: 78, title: "袁安臥雪", level: "中籤", poem: "守貧樂道度嚴冬，\n霜雪遇太陽化開。\n歡喜賀喜皆有慶，\n何須勞碌向外尋。" },
  { no: 79, title: "趙子龍長坂坡救主", level: "上籤", poem: "萬軍叢中展英豪，\n救得主公名姓標。\n貴人相引登高位，\n榮華富貴自相邀。" },
  { no: 80, title: "智遠投軍", level: "中籤", poem: "棄家投軍求出路，\n歷盡艱辛步步高。\n若得貴人提挈處，\n自然福祿自天安。" },
  { no: 81, title: "風雲際會", level: "上籤", poem: "風雲際會正當時，\n莫待風吹葉落枝。\n貴人指引登高位，\n榮華富貴自相隨。" },
  { no: 82, title: "呂後害韓信", level: "下籤", poem: "功高震主惹禍端，\n暗裡藏針最難防。\n勸君退後一步想，\n守舊安分自無殃。" },
  { no: 83, title: "諸葛亮七擒孟獲", level: "上籤", poem: "德威並施服人心，\n七擒七縱顯智謀。\n貴人相引登高位，\n萬事亨通喜自隨。" },
  { no: 84, title: "莊子鼓盆", level: "中籤", poem: "生死有命富貴天，\n鼓盆歌唱理自然。\n莫向平途空自歎，\n隨緣安分度順潮。" },
  { no: 85, title: "韓信拜相", level: "上籤", poem: "登壇拜相威名揚，\n一朝功成世人誇。\n貴人相提兼相引，\n榮華富貴自豪家。" },
  { no: 86, title: "商山四皓", level: "中籤", poem: "隱居山林避世塵，\n道德高尚世人尊。\n須知暗裡明神佑，\n自得榮華保一身。" },
  { no: 87, title: "魏延反骨", level: "下籤", poem: "懷叛逆心惹禍災，\n臨危後悔有何求。\n勸君作事莫輕狂，\n守舊安分自平安。" },
  { no: 88, title: "張良退隱", level: "上籤", poem: "功成身退明哲保，\n高枕無憂自在仙。\n凡事合心皆大吉，\n門庭喜慶自天開。" },
  { no: 89, title: "班超投筆從戎", level: "上籤", poem: "大鵬展翅恨天低，\n直上青雲路上飛。\n莫道前程無出路，\n貴人相引自高威。" },
  { no: 90, title: "楊家將破陣", level: "中籤", poem: "忠勇破陣顯威風，\n歷盡艱辛步步高。\n貴人相助多方便，\n莫向平途空自勞。" },
  { no: 91, title: "諸葛亮出師", level: "中籤", poem: "鞠躬盡瘁為國家，\n歷盡艱辛步步高。\n若得貴人提挈處，\n自然福祿自天安。" },
  { no: 92, title: "蔡卿報恩", level: "上籤", poem: "報恩報德善心存，\n福祿綿綿自天來。\n貴人指引登雲路，\n從今門戶自光彩。" },
  { no: 93, title: "高祖入關", level: "上籤", poem: "約法三章得民心，\n入關稱帝基業成。\n貴人相引登高位，\n榮華富貴福無邊。" },
  { no: 94, title: "伯牙碎琴", level: "下籤", poem: "知音一去不復還，\n碎琴斷弦恨綿綿。\n萬事回頭看轉背，\n空留遺恨在人間。" },
  { no: 95, title: "曹操逼宮", level: "下籤", poem: "欺君罔上惹禍端，\n強取豪奪到底休。\n若不回頭早思省，\n臨危後悔有何求。" },
  { no: 96, title: "劉備借荊州", level: "中籤", poem: "借得荊州暫立足，\n前程有路未開懷。\n須知暗裡明神佑，\n從今以後喜安居。" },
  { no: 97, title: "姜太公封神", level: "上籤", poem: "功成名就封神榜，\n萬古流芳世人誇。\n貴人相提兼相引，\n榮華富貴自豪家。" },
  { no: 98, title: "蘇秦掛六國相印", level: "上籤", poem: "合縱連橫佩相印，\n一朝榮貴出頭來。\n貴人指引登高位，\n榮華富貴自天來。" },
  { no: 99, title: "陶朱公致富", level: "上籤", poem: "經商致富稱陶朱，\n三聚三散顯智謀。\n凡事合心皆大吉，\n門庭喜慶自天開。" },
  { no: 100, title: "滿堂吉慶", level: "大吉 (上上籤)", poem: "佛光普照吉星臨，\n滿堂吉慶喜盈門。\n萬事如意皆稱心，\n榮華富貴福長存。" }
];

// ============================================================
// 農曆干支日期（基於公曆日期推算）
// ============================================================
const TIAN_GAN = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const DI_ZHI = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const ZODIAC = ["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"];

function getLunarGanZhi(date) {
  const year = date.getFullYear();
  const yearOffset = year - 1984;
  const ganIndex = ((yearOffset % 10) + 10) % 10;
  const zhiIndex = ((yearOffset % 12) + 12) % 12;
  const yearGanZhi = TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex];

  const monthBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4];
  const monthGanStart = (ganIndex * 2 + monthBase[date.getMonth()]) % 10;
  const monthNum = ((date.getMonth() + 10) % 12);
  const monthGan = TIAN_GAN[(monthGanStart + monthNum) % 10];
  const monthZhi = DI_ZHI[((date.getMonth() + 12) % 12)];
  const monthGanZhi = monthGan + monthZhi;

  const baseDate = new Date(1900, 0, 31);
  const diffDays = Math.floor((date - baseDate) / 86400000);
  const dayGanIndex = ((diffDays % 10) + 10) % 10;
  const dayZhiIndex = ((diffDays % 12) + 12) % 12;
  const dayGanZhi = TIAN_GAN[dayGanIndex] + DI_ZHI[dayZhiIndex];

  return {
    year: yearGanZhi,
    month: monthGanZhi,
    day: dayGanZhi,
    zodiac: ZODIAC[zhiIndex]
  };
}

// ============================================================
// 介面邏輯
// ============================================================
const dateBox = document.getElementById("dateBox");
const resultBox = document.getElementById("resultBox");
const statusEl = document.getElementById("status");
const btnDraw = document.getElementById("btnDraw");
const btnClear = document.getElementById("btnClear");
const btnCopy = document.getElementById("btnCopy");

let currentResult = null;

function setStatus(msg) {
  statusEl.textContent = msg || "";
}

function updateDate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");

  const gz = getLunarGanZhi(now);
  const lunarLine = `農曆 ${gz.year}年（${gz.zodiac}） ${gz.month}月 ${gz.day}日`;

  dateBox.innerHTML = `西元 ${y}年${m}月${d}日<br>${lunarLine}`;
}

updateDate();
setInterval(updateDate, 60000);

// 求籤
btnDraw.addEventListener("click", () => {
  if (LOTTERY_DATA.length === 0) {
    setStatus("籤庫為空，請先補充籤詩資料。");
    return;
  }

  btnDraw.disabled = true;
  setStatus("求籤中…請稍候 2 秒");
  resultBox.textContent = "（求籤中，請保持心誠…）";

  setTimeout(() => {
    const item = LOTTERY_DATA[Math.floor(Math.random() * LOTTERY_DATA.length)];
    currentResult = item;

    resultBox.textContent =
      `您抽中的是第 ${item.no} 籤\n` +
      `典故：${item.title}\n` +
      `吉凶：${item.level}\n\n` +
      `籤詩原文：\n${item.poem}`;

    setStatus("");
    btnDraw.disabled = false;
  }, 2000);
});

// 清除
btnClear.addEventListener("click", () => {
  resultBox.textContent = "點擊下方「求籤」開始。";
  currentResult = null;
  setStatus("已清除");
});

// 複製
btnCopy.addEventListener("click", async () => {
  if (!currentResult) {
    setStatus("尚未求籤，沒有內容可複製。");
    return;
  }

  const now = new Date();
  const gz = getLunarGanZhi(now);
  const lunarStr = `農曆 ${gz.year}年（${gz.zodiac}） ${gz.month}月 ${gz.day}日`;

  const copyText =
    `觀音靈籤\n` +
    `日期：${lunarStr}\n\n` +
    `第 ${currentResult.no} 籤（${currentResult.title}）\n` +
    `吉凶：${currentResult.level}\n` +
    `籤詩：\n${currentResult.poem}`;

  try {
    await navigator.clipboard.writeText(copyText);
    setStatus("已複製到剪貼簿");
  } catch (err) {
    setStatus("複製失敗：" + err.message);
  }
});