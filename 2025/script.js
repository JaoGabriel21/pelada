// --- 1. BANCO DE DADOS DE JOGADORES (Atualizado com novos nomes) ---
const jogadores = [
    // --- JOGADORES ORIGINAIS ---
    { nome: "João G.", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/181228961_1078560592688072_665851991389254516_n.jpg?ccb=11-4&oh=01_Q5Aa3gHsV03lKnghNRAS1lqloRzu7ecB2FqLjppgTW8EBiCaaA&oe=6970658E&_nc_sid=5e03e0&_nc_cat=102", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Pedrinho", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/429255747_1051437012598334_672174196726423210_n.jpg?ccb=11-4&oh=01_Q5Aa3gE9Icqt8Mv2a1XpKsh_N0SpOCKmIzTwTyNqI9nBqEcNFQ&oe=69704508&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Colombia", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/473408869_538759969251904_7857540136570595296_n.jpg?ccb=11-4&oh=01_Q5Aa3gHG9Mly08t8Sr-rNS-UaSHo4FlNBRSudUmP4pHImCYhJg&oe=69706739&_nc_sid=5e03e0&_nc_cat=109", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Samuel", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/521576332_769272935554912_3275661071789941563_n.jpg?ccb=11-4&oh=01_Q5Aa3gExt4Rzy0XNW-UBR_ANRDR1qvFAwZxi2s1wx3HdvolW3A&oe=69704C36&_nc_sid=5e03e0&_nc_cat=105", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Gustahab", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/439249268_434862129570977_8206225452752137202_n.jpg?ccb=11-4&oh=01_Q5Aa3gH6_mhs9S5Je8u5faHXcnuVIWYNMgTmSsd-eCSBMJJkZw&oe=69703D86&_nc_sid=5e03e0&_nc_cat=106", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Thiago L.", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/528715853_1540876043996194_4138768970405509631_n.jpg?ccb=11-4&oh=01_Q5Aa3gGTAv4LSiMg9iPM1fE9WTVJ16RRNdYBH6y8wygf9krJOw&oe=69703E4B&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Chaves", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/518953667_738234845611994_7766136400258293629_n.jpg?ccb=11-4&oh=01_Q5Aa3gFcANtj5xHmgL5HwofW_PNSxgOpD1cHV4o3aptuaCWMxA&oe=69706680&_nc_sid=5e03e0&_nc_cat=108", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Loirin", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/571099819_1104595618423378_860575607875669691_n.jpg?ccb=11-4&oh=01_Q5Aa3gHlV3B0EGs4OhFl7YmFVCp11jTxSMfVog0hxiPGTW8rQw&oe=69704C6D&_nc_sid=5e03e0&_nc_cat=105", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Douglas", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/488417596_1329122108201698_2802660902085527597_n.jpg?ccb=11-4&oh=01_Q5Aa3gEOORF3PMzAo-UFBJuFbqEQmBUX0G9Yf5Hk4Jeo6zq07g&oe=697056C9&_nc_sid=5e03e0&_nc_cat=107", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Felipe", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/577873873_841152082024544_3479787730576796283_n.jpg?ccb=11-4&oh=01_Q5Aa3gEoQ6ytMwtw-9dxjqEuu6rBjBdvGTZLFLk0zInXkZkAtA&oe=69706312&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Lott", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/508553094_882328444355077_8357485012377416225_n.jpg?ccb=11-4&oh=01_Q5Aa3gFBR0FCa6RD7LnHv-NGuQaFk3RY29LddlzShFRJpEBgWQ&oe=69706551&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Kayan", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/515507487_1805595570387170_727168124970758572_n.jpg?ccb=11-4&oh=01_Q5Aa3gG7Cst2YgxzPBmCml4mY2ml2EmLl_xr2r2ruXhweoK4jQ&oe=69706736&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Lucas", foto: "../img/lucas.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Angelo", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/508650785_721751111017682_7325046047465738836_n.jpg?ccb=11-4&oh=01_Q5Aa3gFb3lbs5elapTtjgFZSEVts1aNAE4VKSOd__82ICVIUeg&oe=69705A6F&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Bruno", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534423535_1857846355085757_1355694869978555994_n.jpg?ccb=11-4&oh=01_Q5Aa3gEmOPTvXf87HnVscIeAYFRk0jbUgQIlG_p8r7W0ZdpVKg&oe=697066C0&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Guidoncic", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534419669_1854772908743724_4276119602341225111_n.jpg?ccb=11-4&oh=01_Q5Aa3gHv_C9bZFziw4La8yZ1oxWic5I5AJqVuE7JbkJOZjLQIQ&oe=69706D0B&_nc_sid=5e03e0&_nc_cat=109", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 1, artilharias: 0 },
    { nome: "Rafael", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/453778747_463075259876036_3893392846952291842_n.jpg?ccb=11-4&oh=01_Q5Aa3gFXPrH-yg2kOpf6sRcwh_h_ctLj2XT5nwxKDXaI8FGxSg&oe=69705A45&_nc_sid=5e03e0&_nc_cat=103", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Pepe", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/567657678_871593888541784_8023990647240951763_n.jpg?ccb=11-4&oh=01_Q5Aa3gE1mspD9rl_H5j86_FVpz6mbEqKeVV-bW43OR9sdb4iXw&oe=69705AFE&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Renan", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/597704937_877054118018181_806930989951513078_n.jpg?ccb=11-4&oh=01_Q5Aa3gGr6MJHMV3Vb9_3SilKcr26SYWmd8lzjl3YK73bTXfVKQ&oe=69705B58&_nc_sid=5e03e0&_nc_cat=102", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Alucard", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/605029408_809899362053079_3016598508501917913_n.jpg?ccb=11-4&oh=01_Q5Aa3gG54MuFxICfcfNuEw3qzyki3btQfHKuAXr7e7RlQkxekA&oe=697101FC&_nc_sid=5e03e0&_nc_cat=110", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Matheus", foto: "../img/matheus.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Rickson", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/491843800_729226286121610_6365021200973351345_n.jpg?ccb=11-4&oh=01_Q5Aa3gF8yySnGe1hcmdytV1zqDed8YhCGNNTdY7yE3p4pQt13g&oe=69712210&_nc_sid=5e03e0&_nc_cat=107", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Heitor", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534417974_789089113728193_2033118326111280978_n.jpg?ccb=11-4&oh=01_Q5Aa3gHU96q2WUcXAEGzOZLC4Iu5e-wIVnrMlSPKyGy7p73xEg&oe=69711EF3&_nc_sid=5e03e0&_nc_cat=106", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Loschi", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/421105111_828893702591688_6253984013931826233_n.jpg?ccb=11-4&oh=01_Q5Aa3gExBE5Jgf4FOZSQAkrMkg6zTHDaJPGqmIeZLxvVjcMtkQ&oe=6970F516&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Gabal", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/505225702_1027263776199010_2127406370177934762_n.jpg?ccb=11-4&oh=01_Q5Aa3gG5vEX00o_FpT4nX6p9C7Pf6Nya4aUwFX0KuMJ1W3R8pg&oe=6970F359&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Arcuri", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/453775546_414955788360897_5419295932322722289_n.jpg?ccb=11-4&oh=01_Q5Aa3gH0_e0uWbceclk5AQWadGAtaBqHEWWc-NgDmXxEuNNOCg&oe=6970F2AF&_nc_sid=5e03e0&_nc_cat=106", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Kaick", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534421829_634560093045216_3792830664596656082_n.jpg?ccb=11-4&oh=01_Q5Aa3gGsD-mSs8ARX4EherCuJebmSn2qF5Jlx4hzgjEwGR16CA&oe=6970FCD5&_nc_sid=5e03e0&_nc_cat=102", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Guihab", foto: "../img/guihab.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Arthur", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/473403394_1113558940499385_4128632047873134796_n.jpg?ccb=11-4&oh=01_Q5Aa3gFmNF20VIGxOv9SyqOR4yzTkUyoWh9LS1iDR74eSCKZkQ&oe=6970FFFE&_nc_sid=5e03e0&_nc_cat=109", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Eric", foto: "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Robson", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/425209599_1446166932634078_3607090316549546658_n.jpg?ccb=11-4&oh=01_Q5Aa3gHLCbae6KZaKi2BSr7zhM4JBq1RLehHFBOZyFGEkJ2EXw&oe=69710FDD&_nc_sid=5e03e0&_nc_cat=105", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Ximbinha", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/604005691_1376702513818986_8920198354668845786_n.jpg?ccb=11-4&oh=01_Q5Aa3gHNATAlEorjqqDVsgJbY-XliuhrwBvwm-dEUsbUseD4VA&oe=6971037A&_nc_sid=5e03e0&_nc_cat=111", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Faissal", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/516302142_1720900425283493_661516832602190096_n.jpg?ccb=11-4&oh=01_Q5Aa3gEPWnkUZj2fBgwfNqtXV_49JXcWAdGfiSXZudMtRGzQig&oe=6971119B&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "SC", foto: "../img/sc.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Dudu", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/458989088_930914939009189_270231833686614459_n.jpg?ccb=11-4&oh=01_Q5Aa3gEzBTg8GX_BfE53VcelMQzndt2ef2qUzbKeLzrt3IUVoA&oe=697129AE&_nc_sid=5e03e0&_nc_cat=108", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Sanjay", foto: "../img/sanjay.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Juliano", foto: "../img/juliano.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Venezuela", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534425700_1995705891184935_2319731149058225588_n.jpg?ccb=11-4&oh=01_Q5Aa3gEVVcSXPfXKTVk9_e7esVcdTXseaSNTOSttTF_L7r0icg&oe=6970FB3E&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Yan Leal", foto: "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Theuso", foto: "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Caio", foto: "../img/caio.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Yago", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/510590977_1906896626830031_7860027205512401533_n.jpg?ccb=11-4&oh=01_Q5Aa3gHnZvVfoT6wxWzagnXFy3FqgUt2T9LrCD4evlqZpBobsQ&oe=69711463&_nc_sid=5e03e0&_nc_cat=101", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Miguel X.", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/513502500_961375396025028_2930146497197648438_n.jpg?ccb=11-4&oh=01_Q5Aa3gH7Lrcn_T1XwzyS3yG2D58mwjaF9eg2aCVHvVkPpn-JVg&oe=697111FD&_nc_sid=5e03e0&_nc_cat=109", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Soldiier", foto: "../img/soldiier.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Nicollas", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534423168_1413710900144466_1692298151557591693_n.jpg?ccb=11-4&oh=01_Q5Aa3gFMpkxC0GSKYJ3MGQqkuiu-_0XWjnynnCADsnZ7ba4sfQ&oe=69712569&_nc_sid=5e03e0&_nc_cat=104", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Kauã", foto: "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Vinte", foto: "https://static.vecteezy.com/ti/vetor-gratis/p1/16665886-de-design-de-logotipo-numero-20-de-corrida-vetor.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Tiago", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/424436905_750703090349615_6126794557670639693_n.jpg?ccb=11-4&oh=01_Q5Aa3gGUCdV5PhW0Un_3ImrqkJxUKE1rp-ICA-hFqpTDAtktEg&oe=69710E72&_nc_sid=5e03e0&_nc_cat=107", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Tico", foto: "../img/tico.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Jose", foto: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/491874155_732108835998506_6111392903747606477_n.jpg?ccb=11-4&oh=01_Q5Aa3gEL5g-56PPPhU9ZZ7hFByeEkJNJ86jlXh0IPb9qujrhxg&oe=6970FB18&_nc_sid=5e03e0&_nc_cat=109", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Gabriel X.", foto: "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Renatin", foto: "../img/renatin.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Christian", foto: "../img/paim.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Guilherme do Padre", foto: "../img/guipadre.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
    { nome: "Padre", foto: "../img/padre.jpg", jogos: 0, vitorias: 0, campeonatos: 0, gols: 0, assistencias: 0, artilharias: 0 },
];

// --- 2. REGISTRO DAS PELADAS (Números corrigidos: sem aspas em g e a) ---
const peladas = [
    {
        id: 1,
        data: "Quinta - 01/05/2025",
        local: "Arena Soccer",
        campeao: "PRETO",
        artilheiro: "Gustahab / Arcuri",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 5, e: 3, d: 1, gp: 7, gc: 5 },
                jogadores: [
                    { nome: "Thiago L.", g: 1, a: 2 },
                    { nome: "Rickson", g: 2, a: 1 },
                    { nome: "Gustahab", g: 4, a: "-" },
                    { nome: "Heitor", g: "-", a: 1 },
                    { nome: "Kayan", g: "-", a: "-" }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 1, e: 3, d: 3, gp: 2, gc: 5 },
                jogadores: [
                    { nome: "Pedrinho", g: "-", a: 1 },
                    { nome: "Douglas", g: 1, a: "-" },
                    { nome: "Loschi", g: 1, a: "-" },
                    { nome: "Theuso", g: "-", a: "-" },
                    { nome: "João G.", g: "-", a: "-" }
                ]
            },
            {
                nome: "AMARELO",
                classeCor: "header-dourado",
                stats: { v: 1, e: 2, d: 4, gp: 4, gc: 6 },
                jogadores: [
                    { nome: "Felipe", g: 1, a: 1 },
                    { nome: "Renan", g: 2, a: "-" },
                    { nome: "Gabal", g: 1, a: 1 },
                    { nome: "Samuel", g: "-", a: "-" },
                    { nome: "Soldiier", g: "-", a: "-" }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 4, e: 2, d: 3, gp: 7, gc: 3 },
                jogadores: [
                    { nome: "Lott", g: 1, a: 2 },
                    { nome: "Angelo", g: 1, a: "-" },
                    { nome: "Arcuri", g: 4, a: 2 },
                    { nome: "Bruno", g: "-", a: "-" },
                    { nome: "Colombia", g: 1, a: "-" }
                ]
            }
        ],
        goleiros: [
            { nome: "Guidoncic", semGols: 11, golsSofridos: 5 },
            { nome: "Pepe", semGols: 4, golsSofridos: 15 }
        ]
    },
    {
        id: 2,
        data: "Sexta - 13/06/2025",
        local: "Casa de Portugal",
        campeao: "PRETO",
        artilheiro: "Felipe",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 4, e: 3, d: 1, gp: 7, gc: 2 },
                jogadores: [
                    { nome: "Douglas", g: 1, a: "-" },
                    { nome: "Loirin", g: 2, a: "-" },
                    { nome: "Bruno", g: 1, a: 1 },
                    { nome: "Rafael", g: 1, a: 1 },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Thiago L.", g: 1, a: 2 }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 2, e: 2, d: 4, gp: 2, gc: 6 },
                jogadores: [
                    { nome: "Soldiier", g: "-", a: "-" },
                    { nome: "Gabal", g: "-", a: 2 },
                    { nome: "Lucas", g: 1, a: "-" },
                    { nome: "Pedrinho", g: 1, a: "-" },
                    { nome: "Kaick", g: "-", a: "-" },
                    { nome: "Chaves", g: "-", a: "-" }
                ]
            },
            {
                nome: "AMARELO",
                classeCor: "header-dourado",
                stats: { v: 2, e: 3, d: 2, gp: 4, gc: 4 },
                jogadores: [
                    { nome: "Gustahab", g: 2, a: 1 },
                    { nome: "João G.", g: "-", a: "-" },
                    { nome: "Caio", g: "-", a: "-" },
                    { nome: "Angelo", g: "-", a: 1 },
                    { nome: "Lott", g: 1, a: 1 },
                    { nome: "Guihab", g: 1, a: 1 }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 3, e: 2, d: 4, gp: 5, gc: 6 },
                jogadores: [
                    { nome: "Alucard", g: "-", a: "-" },
                    { nome: "Yago", g: 1, a: "-" },
                    { nome: "Colombia", g: "-", a: "-" },
                    { nome: "Miguel X.", g: 1, a: "-" },
                    { nome: "Rickson", g: "-", a: 1 },
                    { nome: "Felipe", g: 3, a: "-" }
                ]
            }
        ],
        goleiros: [
            { nome: "Guidoncic", semGols: 7, golsSofridos: 12 },
            { nome: "Pepe", semGols: 11, golsSofridos: 6 }
        ]
    },
    {
        id: 3,
        data: "Sexta - 27/06/2025",
        local: "Casa de Portugal",
        campeao: "AZUL",
        artilheiro: "Lott / João G.",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 1, e: 1, d: 4, gp: 2, gc: 8 },
                jogadores: [
                    { nome: "Sanjay", g: "-", a: "-" },
                    { nome: "Rickson", g: "-", a: "-" },
                    { nome: "Felipe", g: 1, a: "-" },
                    { nome: "Caio", g: "-", a: "-" },
                    { nome: "Arcuri", g: "-", a: "-" },
                    { nome: "Gustahab", g: 1, a: "-" }
                ]
            },
                        {
                nome: "AMARELO",
                classeCor: "header-dourado",
                stats: { v: 3, e: 1, d: 3, gp: 6, gc: 5 },
                jogadores: [
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Gabal", g: "-", a: 2 },
                    { nome: "Lott", g: 3, a: 1 },
                    { nome: "Pedrinho", g: 2, a: "-" },
                    { nome: "Nicollas", g: 1, a: 1 },
                    { nome: "Samuel", g: "-", a: "-" }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 5, e: 0, d: 2, gp: 8, gc: 3 },
                jogadores: [
                    { nome: "Rafael", g: 1, a: "-" },
                    { nome: "Thiago L.", g: 2, a: 1 },
                    { nome: "Angelo", g: 1, a: 3 },
                    { nome: "Douglas", g: 1, a: 2 },
                    { nome: "João G.", g: 3, a: "-" },
                    { nome: "Robson", g: "-", a: 1 }
                ]
            }
        ],
        goleiros: [
            { nome: "Guidoncic", semGols: 6, golsSofridos: 7 },
            { nome: "Pepe", semGols: 4, golsSofridos: 9 }
        ]
    },
    {
        id: 4,
        data: "Sexta - 11/07/2025",
        local: "Casa de Portugal",
        campeao: "VERDE",
        artilheiro: "Robson",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 4, e: 5, d: 3, gp: 10, gc: 8 },
                jogadores: [
                    { nome: "João G.", g: "-", a: 1 },
                    { nome: "Samuel", g: 1, a: 1 },
                    { nome: "Thiago L.", g: 4, a: 1 },
                    { nome: "Pepe", g: "-", a: 1 },
                    { nome: "Felipe", g: 3, a: "-" },
                    { nome: "Caio", g: "-", a: "-" },
                    { nome: "Miguel X.", g: "-", a: "-" }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 3, e: 4, d: 6, gp: 9, gc: 14 },
                jogadores: [
                    { nome: "Soldiier", g: "-", a: "-" },
                    { nome: "Rafael", g: 2, a: 2 },
                    { nome: "Arcuri", g: "-", a: 1 },
                    { nome: "Colombia", g: "-", a: "-" },
                    { nome: "Gustahab", g: 4, a: "-" },
                    { nome: "Kauã", g: 1, a: "-" },
                    { nome: "Angelo", g: 3, a: "-" }
                ]
            },
            {
                nome: "VERDE",
                classeCor: "header-verde",
                stats: { v: 5, e: 5, d: 3, gp: 12, gc: 10 },
                jogadores: [
                    { nome: "Pedrinho", g: 1, a: 2 },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Robson", g: 6, a: "-" },
                    { nome: "Douglas", g: 2, a: 1 },
                    { nome: "Lott", g: 3, a: 3 },
                    { nome: "Bruno", g: "-", a: 1 }
                ]
            }
        ]
    },
    {
        id: 5,
        data: "Sexta - 18/07/2025",
        local: "Casa de Portugal",
        campeao: "VERDE",
        artilheiro: "Douglas / Lucas",
        times: [
            {
                nome: "BRANCO",
                classeCor: "header-branco",
                stats: { v: 3, e: 1, d: 4, gp: 7, gc: 6 },
                jogadores: [
                    { nome: "Gustahab", g: "-", a: 2 },
                    { nome: "Douglas", g: 4, a: 1 },
                    { nome: "Bruno", g: "-", a: 2 },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Pedrinho", g: "-", a: 1 },
                    { nome: "Felipe", g: 3, a: 1 }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 1, e: 2, d: 4, gp: 4, gc: 8 },
                jogadores: [
                    { nome: "Arcuri", g: "-", a: "-" },
                    { nome: "Gabal", g: "-", a: "-" },
                    { nome: "Caio", g: "-", a: "-" },
                    { nome: "Rafael", g: 1, a: 1 },
                    { nome: "João G.", g: 1, a: 1 },
                    { nome: "Rickson", g: 2, a: "-" }
                ]
            },
            {
                nome: "VERDE",
                classeCor: "header-verde",
                stats: { v: 6, e: 1, d: 2, gp: 9, gc: 6 },
                jogadores: [
                    { nome: "Vinte", g: 2, a: 2 },
                    { nome: "Colombia", g: "-", a: "-" },
                    { nome: "Lott", g: 2, a: 1 },
                    { nome: "Angelo", g: "-", a: 2 },
                    { nome: "Venezuela", g: 1, a: "-" },
                    { nome: "Lucas", g: 4, a: "-" }
                ]
            }
        ]
    },
    {
        id: 6,
        data: "Sexta - 25/07/2025",
        local: "Casa de Portugal",
        campeao: "VERMELHO",
        artilheiro: "Angelo",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 2, e: 4, d: 2, gp: 5, gc: 6 },
                jogadores: [
                    { nome: "João G.", g: 1, a: 1 },
                    { nome: "Douglas", g: 1, a: "-" },
                    { nome: "Felipe", g: 1, a: 1 },
                    { nome: "Gabal", g: 1, a: "-" },
                    { nome: "Sanjay", g: "-", a: "-" },
                    { nome: "Nicollas", g: 2, a: 2 }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 2, e: 3, d: 4, gp: 5, gc: 7 },
                jogadores: [
                    { nome: "Bruno", g: "-", a: "-" },
                    { nome: "Pedrinho", g: 1, a: "-" },
                    { nome: "Chaves", g: "-", a: "-" },
                    { nome: "Lucas", g: 1, a: 3 },
                    { nome: "Ximbinha", g: "-", a: "-" },
                    { nome: "SC", g: "-", a: "-" }
                ]
            },
            {
                nome: "AMARELO",
                classeCor: "header-dourado",
                stats: { v: 5, e: 3, d: 2, gp: 11, gc: 5 },
                jogadores: [
                    { nome: "Rafael", g: 2, a: 1 },
                    { nome: "Gustahab", g: 1, a: 2 },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Rickson", g: "-", a: "-" },
                    { nome: "Loirin", g: 2, a: "-" }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 3, e: 2, d: 3, gp: 7, gc: 8 },
                jogadores: [
                    { nome: "Loschi", g: 1, a: "-" },
                    { nome: "Angelo", g: 4, a: 3 },
                    { nome: "Lott", g: 2, a: 3 },
                    { nome: "Arcuri", g: 1, a: 2 },
                    { nome: "Soldiier", g: "-", a: "-" },
                    { nome: "Tiago", g: 2, a: 1 }
                ]
            }
        ],
        goleiros: [
            { nome: "Guidoncic", semGols: 9, golsSofridos: 7 },
            { nome: "Pepe", semGols: 6, golsSofridos: 9 }
        ]
    },
    {
        id: 7,
        data: "Sexta - 01/08/2025",
        local: "Casa de Portugal",
        campeao: "PRETO",
        artilheiro: "Lucas",
        times: [
            {
                nome: "BRANCO",
                classeCor: "header-branco",
                stats: { v: 1, e: 3, d: 4, gp: 3, gc: 7 },
                jogadores: [
                    { nome: "Rafael", g: "-", a: "-" },
                    { nome: "Angelo", g: 1, a: 1 },
                    { nome: "Tico", g: 1, a: "-" },
                    { nome: "Sanjay", g: "-", a: "-" },
                    { nome: "Loirin", g: 2, a: "-" },
                    { nome: "Samuel", g: "-", a: "-" }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 4, e: 2, d: 3, gp: 5, gc: 4 },
                jogadores: [
                    { nome: "Gabal", g: 1, a: 1 },
                    { nome: "João G.", g: "-", a: 2 },
                    { nome: "Lucas", g: 4, a: "-" },
                    { nome: "Chaves", g: "-", a: "-" },
                    { nome: "Robson", g: "-", a: 1 },
                    { nome: "Rickson", g: 1, a: "-" }
                ]
            },
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 4, e: 3, d: 2, gp: 8, gc: 5 },
                jogadores: [
                    { nome: "Jose", g: 3, a: 1 },
                    { nome: "Gustahab", g: "-", a: "-" },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "SC", g: 1, a: 1 },
                    { nome: "Thiago L.", g: 3, a: 2 },
                    { nome: "Lott", g: 2, a: 3 }
                ]
            }
        ]
    },
    {
        id: 8,
        data: "Sexta - 22/08/2025",
        local: "Casa de Portugal",
        campeao: "VERDE",
        artilheiro: "Matheus",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 1, e: 3, d: 2, gp: 3, gc: 5 },
                jogadores: [
                    { nome: "Rafael", g: "-", a: 1 },
                    { nome: "Pedrinho", g: 1, a: "-" },
                    { nome: "Arthur", g: 1, a: "-" },
                    { nome: "Douglas", g: 1, a: "-" },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Eric", g: "-", a: "-" }
                ]
            },
            {
                nome: "ROXO",
                classeCor: "header-roxo",
                stats: { v: 2, e: 1, d: 5, gp: 4, gc: 8 },
                jogadores: [
                    { nome: "Lucas", g: "-", a: 2 },
                    { nome: "Loirin", g: 3, a: "-" },
                    { nome: "Robson", g: 1, a: "-" },
                    { nome: "Renan", g: 1, a: 1 },
                    { nome: "Gustahab", g: "-", a: 1 },
                    { nome: "Ximbinha", g: "-", a: "-" }
                ]
            },
            {
                nome: "BRANCO",
                classeCor: "header-branco",
                stats: { v: 3, e: 0, d: 4, gp: 6, gc: 8 },
                jogadores: [
                    { nome: "Lott", g: "-", a: "-" },
                    { nome: "Felipe", g: 2, a: 2 },
                    { nome: "Faissal", g: 2, a: 2 },
                    { nome: "Arcuri", g: 1, a: "-" },
                    { nome: "Rickson", g: "-", a: "-" },
                    { nome: "João G.", g: 1, a: 1 }
                ]
            },
            {
                nome: "VERDE",
                classeCor: "header-verde",
                stats: { v: 9, e: 2, d: 2, gp: 15, gc: 5 },
                jogadores: [
                    { nome: "Thiago L.", g: 1, a: 1 },
                    { nome: "Matheus", g: 8, a: 1 },
                    { nome: "Angelo", g: 1, a: 2 },
                    { nome: "Chaves", g: 5, a: 4 },
                    { nome: "Samuel", g: "-", a: "-" },
                    { nome: "SC", g: "-", a: "-" }
                ]
            }
        ]
    },
    {
        id: 9,
        data: "Sexta - 21/11/2025",
        local: "Casa de portugal",
        campeao: "AZUL",
        artilheiro: "Thiago L.",
        times: [
            {
                nome: "PRETO",
                classeCor: "header-preto",
                stats: { v: 4, e: 1, d: 3, gp: 6, gc: 5 },
                jogadores: [
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Arcuri", g: 1, a: 1 },
                    { nome: "Loirin", g: 1, a: "-" },
                    { nome: "Samuel", g: 1, a: 1 },
                    { nome: "Rickson", g: 1, a: "-" },
                    { nome: "Lott", g: 2, a: 2 }
                ]
            },
            {
                nome: "AZUL",
                classeCor: "header-azul",
                stats: { v: 6, e: 2, d: 2, gp: 11, gc: 5 },
                jogadores: [
                    { nome: "Tiago", g: "-", a: 3 },
                    { nome: "Pepe", g: "-", a: "-" },
                    { nome: "João G.", g: "-", a: 2 },
                    { nome: "Dudu", g: 2, a: 2 },
                    { nome: "Sanjay", g: 1, a: "-" },
                    { nome: "Thiago L.", g: 8, a: 1 }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 1, e: 1, d: 4, gp: 1, gc: 5 },
                jogadores: [
                    { nome: "Rafael", g: 1, a: 1 },
                    { nome: "Angelo", g: "-", a: "-" },
                    { nome: "Gabal", g: "-", a: "-" },
                    { nome: "Colombia", g: "-", a: "-" },
                    { nome: "Miguel X.", g: "-", a: "-" },
                    { nome: "Juliano", g: "-", a: "-" }
                ]
            },
            {
                nome: "Verde",
                classeCor: "header-verde",
                stats: { v: 3, e: 0, d: 5, gp: 4, gc: 7 },
                jogadores: [
                    { nome: "Chaves", g: 1, a: "-" },
                    { nome: "Felipe", g: "-", a: "-" },
                    { nome: "Venezuela", g: "-", a: "-" },
                    { nome: "Yan Leal", g: "-", a: "-" },
                    { nome: "Lucas", g: 1, a: 2 },
                    { nome: "Douglas", g: 2, a: 1 }
                ]
            }
        ]
    },
    {
        id: 10,
        data: "Sexta - 28/11/2025",
        local: "Casa de Portugal",
        campeao: "BRANCO",
        artilheiro: "Lott",
        times: [
            {
                nome: "BRANCO",
                classeCor: "header-branco",
                stats: { v: 4, e: 4, d: 1, gp: 9, gc: 6 },
                jogadores: [
                    { nome: "João G.", g: 2, a: 1 },
                    { nome: "Felipe", g: 3, a: "-" },
                    { nome: "Pedrinho", g: 2, a: 1 },
                    { nome: "Rickson", g: 1, a: 1 },
                    { nome: "Robson", g: "-", a: "-" },
                    { nome: "Lucas", g: 2, a: 1 }
                ]
            },
            {
                nome: "AMARELO",
                classeCor: "header-dourado",
                stats: { v: 4, e: 4, d: 2, gp: 6, gc: 4 },
                jogadores: [
                    { nome: "Gabal", g: 1, a: "-" },
                    { nome: "Rafael", g: "-", a: 3 },
                    { nome: "Lott", g: 4, a: "-" },
                    { nome: "Juliano", g: "-", a: "-" },
                    { nome: "Bruno", g: "-", a: "-" },
                    { nome: "Miguel X.", g: 1, a: 1 }
                ]
            },
            {
                nome: "VERDE",
                classeCor: "header-verde",
                stats: { v: 1, e: 3, d: 3, gp: 3, gc: 5 },
                jogadores: [
                    { nome: "Thiago L.", g: 2, a: "-" },
                    { nome: "Colombia", g: "-", a: "-" },
                    { nome: "Heitor", g: 1, a: 1 },
                    { nome: "Gabriel X.", g: "-", a: 1 },
                    { nome: "Arcuri", g: "-", a: 1 },
                    { nome: "Renatin", g: "-", a: "-" }
                ]
            },
            {
                nome: "VERMELHO",
                classeCor: "header-vermelho",
                stats: { v: 2, e: 1, d: 5, gp: 5, gc: 8 },
                jogadores: [
                    { nome: "Loirin", g: "-", a: 1 },
                    { nome: "Angelo", g: 2, a: "-" },
                    { nome: "Venezuela", g: 1, a: 2 },
                    { nome: "Christian", g: 1, a: 1 },
                    { nome: "Kayan", g: "-", a: "-" },
                    { nome: "Dudu", g: "-", a: "-" }
                ]
            }
        ]
    },
    {
    id: 11,
    data: "Sexta - 05/12/2025",
    local: "Casa de Portugal",
    campeao: "VERMELHO",
    artilheiro: "Felipe / Douglas / Padre",
    times: [
        {
            nome: "PRETO",
            classeCor: "header-preto",
            stats: { v: 2, e: 1, d: 3, gp: 4, gc: 4 }, 
            jogadores: [
                { nome: "Pedrinho", g: 1, a: "-" },
                { nome: "Douglas", g: 2, a: "-" },
                { nome: "Dudu", g: "-", a: "-" },
                { nome: "Samuel", g: "-", a: "-" },
                { nome: "Rickson", g: "-", a: "-" },
                { nome: "Renatin", g: "-", a: "-" },
                { nome: "Guilherme do Padre", g: 1, a: "-" }
            ]
        },
        {
            nome: "BRANCO",
            classeCor: "header-branco",
            stats: { v: 2, e: 3, d: 2, gp: 5, gc: 5 },
            jogadores: [
                { nome: "Angelo", g: "-", a: 1 },
                { nome: "Yan Leal", g: 1, a: "-" },
                { nome: "Juliano", g: 1, a: "-" },
                { nome: "Lott", g: "-", a: "-" },
                { nome: "João G.", g: 1, a: 2 }, 
                { nome: "Lucas", g: 1, a: 1 },
            ]
        },
        {
            nome: "VERMELHO",
            classeCor: "header-vermelho",
            stats: { v: 3, e: 2, d: 2, gp: 6, gc: 5 },
            jogadores: [
                { nome: "Kayan", g: "-", a: "-" },
                { nome: "Thiago L.", g: 1, a: 1 },
                { nome: "Gabal", g: 1, a: "-" },
                { nome: "Chaves", g: "-", a: "-" },
                { nome: "Felipe", g: 2, a: 1 },
                { nome: "Padre", g: 2, a: 3 }
            ]
        }
    ],
    goleiros: []
}
];

// --- 3. LÓGICA DE CÁLCULO (JOGADORES E GOLEIROS) ---

function calcularEstatisticas() {
    // Resetar Stats de Linha
    jogadores.forEach(j => {
        j.jogos = 0; j.vitorias = 0; j.campeonatos = 0; j.gols = 0; j.assistencias = 0; j.artilharias = 0;
    });

    // Loop Principal das Peladas
    peladas.forEach(pelada => {
        pelada.times.forEach(time => {
            const vitoriasDoTime = time.stats.v || 0;
            const ehCampeao = time.nome === pelada.campeao;

            time.jogadores.forEach(jogadorNaPelada => {
                const jogadorOficial = jogadores.find(j => j.nome === jogadorNaPelada.nome);
                if (jogadorOficial) {
                    jogadorOficial.jogos += 1;
                    jogadorOficial.vitorias += vitoriasDoTime;
                    if (ehCampeao) jogadorOficial.campeonatos += 1;
                    
                    let golsNaRodada = jogadorNaPelada.g === "-" ? 0 : parseInt(jogadorNaPelada.g);
                    jogadorOficial.gols += golsNaRodada;

                    let assistNaRodada = jogadorNaPelada.a === "-" ? 0 : parseInt(jogadorNaPelada.a);
                    jogadorOficial.assistencias += assistNaRodada;
                    
                    if (pelada.artilheiro.includes(jogadorOficial.nome)) {
                        jogadorOficial.artilharias += 1;
                    }
                }
            });
        });
    });
}

// NOVA FUNÇÃO: CALCULA APENAS OS GOLEIROS (Separado)
function calcularEstatisticasGoleiros() {
    const statsGoleiros = {};

    peladas.forEach(pelada => {
        // Verifica se houve goleiros registrados nesta pelada
        if (pelada.goleiros && pelada.goleiros.length > 0) {
            pelada.goleiros.forEach(g => {
                // Se primeira vez que o goleiro aparece, inicializa objeto
                if (!statsGoleiros[g.nome]) {
                    // Tenta achar a foto do jogador no banco principal, senão usa padrão
                    const cadastroOriginal = jogadores.find(j => j.nome === g.nome);
                    statsGoleiros[g.nome] = {
                        nome: g.nome,
                        foto: cadastroOriginal ? cadastroOriginal.foto : 'https://i.pravatar.cc/150',
                        jogos: 0,
                        cleanSheets: 0, 
                        golsSofridos: 0
                    };
                }

                // Soma os dados da partida
                const stat = statsGoleiros[g.nome];
                stat.jogos += 1;
                
                // Se você já colocou "semGols" manualmente no array, usa ele. 
                // Senão, calcula baseado se sofreu 0 gols.
                const golsSofridosNaPartida = (g.golsSofridos || 0);
                stat.golsSofridos += golsSofridosNaPartida;

                if (g.semGols) {
                    stat.cleanSheets += g.semGols; // Aceita dado manual
                } else if (golsSofridosNaPartida === 0) {
                    stat.cleanSheets += 1; // Calculo automático
                }
            });
        }
    });

    // Retorna array ordenado: 1º Clean Sheets, 2º Menos Gols Sofridos
    return Object.values(statsGoleiros).sort((a, b) => {
        if (b.cleanSheets !== a.cleanSheets) return b.cleanSheets - a.cleanSheets;
        return a.golsSofridos - b.golsSofridos;
    });
}

// --- RENDERIZAÇÃO E RANKING (LINHA) ---

function carregarRanking() {
    calcularEstatisticas(); // Calcula Linha

    const tbody = document.getElementById("tabela-ranking");
    tbody.innerHTML = ""; 
    
    const rankingOrdenado = jogadores.sort((a, b) => {
        let participacoesA = a.gols + a.assistencias;
        let mediaA = a.jogos > 0 ? participacoesA / a.jogos : 0;
        let participacoesB = b.gols + b.assistencias;
        let mediaB = b.jogos > 0 ? participacoesB / b.jogos : 0;

        if (b.campeonatos !== a.campeonatos) return b.campeonatos - a.campeonatos;
        if (mediaB !== mediaA) return mediaB - mediaA;
        if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
        if (b.gols !== a.gols) return b.gols - a.gols;
        if (b.assistencias !== a.assistencias) return b.assistencias - a.assistencias;
        if (b.artilharias !== a.artilharias) return b.artilharias - a.artilharias;
        return b.jogos - a.jogos;
    });

    rankingOrdenado.forEach((jogador, index) => {
        let posicao = `${index + 1}º`;
        let classePosicao = ""; 
        if (index === 0) { posicao = "🥇 1º"; classePosicao = "color:#FFD700; font-size:1.2rem"; } 
        else if (index === 1) { posicao = "🥈 2º"; classePosicao = "color:#C0C0C0; font-size:1.1rem"; } 
        else if (index === 2) { posicao = "🥉 3º"; classePosicao = "color:#CD7F32; font-size:1.1rem"; } 

        let participacoes = jogador.gols + jogador.assistencias;
        let media = (participacoes / jogador.jogos).toFixed(2);
        if (jogador.jogos === 0) media = "0.00";
        let bolasArtilharia = "⚽".repeat(jogador.artilharias);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight:bold; ${classePosicao}">${posicao}</td>
            <td>
                <div class="player-cell">
                    <img src="${jogador.foto}" alt="Foto">
                    <strong>${jogador.nome}</strong>
                </div>
            </td>
            <td style="color:#ccc">${jogador.jogos}</td>
            <td style="color:#FFD700; font-weight:bold; font-size:1.1rem;">${jogador.campeonatos}</td>
            <td style="color:#e0e0e0;">${jogador.vitorias}</td>
            <td class="stat-highlight">${jogador.gols}</td>
            <td>${jogador.assistencias}</td>
            <td style="color:#aaa; font-style:italic">${media}</td>
            <td style="font-size: 0.8rem; letter-spacing: 2px;">${bolasArtilharia}</td>
        `;
        tbody.appendChild(tr);
    });
}

// --- FUNÇÕES DE INTERFACE (CARDS) ---

function carregarJogadores() {
    // Esta função carrega os jogadores de LINHA
    const grid = document.getElementById("lista-jogadores");
    if(!grid) return; // Segurança

    const jogadoresAlfabetico = [...jogadores].sort((a, b) => a.nome.localeCompare(b.nome));

    jogadoresAlfabetico.forEach(jogador => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${jogador.foto}" alt="${jogador.nome}">
            <h3>${jogador.nome}</h3>
            <p>${jogador.gols} Gols na temporada</p>
        `;
        card.onclick = () => abrirModalJogador(jogador);
        grid.appendChild(card);
    });
}

// NOVA FUNÇÃO: RENDERIZA A SEÇÃO DE GOLEIROS
function carregarGoleiros() {
    const dadosGoleiros = calcularEstatisticasGoleiros();
    const listaJogadores = document.getElementById("lista-jogadores");

    // Verifica se já existe a área de goleiros, senão cria
    let containerGoleiros = document.getElementById("container-goleiros-wrapper");
    
    if (!containerGoleiros && listaJogadores) {
        // Cria a estrutura HTML dinamicamente após a lista de jogadores
        const wrapper = document.createElement("div");
        wrapper.id = "container-goleiros-wrapper";
        wrapper.style.marginTop = "50px";
        wrapper.style.borderTop = "1px solid #333";
        wrapper.style.paddingTop = "20px";
        
        wrapper.innerHTML = `
            <h2 style="text-align:center; margin-bottom: 20px; font-size: 1.5rem; color: #aaa;">🧤 Paredões da Pelada</h2>
            <div id="lista-goleiros" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; padding: 10px;"></div>
        `;
        
        listaJogadores.parentNode.insertBefore(wrapper, listaJogadores.nextSibling);
    }

    const gridGoleiros = document.getElementById("lista-goleiros");
    if (!gridGoleiros) return;
    
    gridGoleiros.innerHTML = ""; // Limpa

    dadosGoleiros.forEach(goleiro => {
        const card = document.createElement("div");
        card.className = "card";
        // Estilo com borda LARANJA para o tema 2025
        card.style.borderBottom = "4px solid #ff9800";
        
        // MUDANÇA AQUI: "Jogos" -> "Peladas" e borda da imagem LARANJA
        card.innerHTML = `
            <img src="${goleiro.foto}" alt="${goleiro.nome}" style="border: 2px solid #ff9800;">
            <h3>${goleiro.nome}</h3>
            <div style="font-size: 0.9rem; margin-top: 5px; color: #ccc;">
                <p>🥅 Peladas: ${goleiro.jogos}</p>
                <p>🛡️ Sem Sofrer: <strong style="color: #4caf50">${goleiro.cleanSheets}</strong></p>
                <p>❌ Gols Sofridos: <strong style="color: #f44336">${goleiro.golsSofridos}</strong></p>
            </div>
        `;
        // Goleiros não abrem modal de jogador de linha (opcional)
        gridGoleiros.appendChild(card);
    });
}

function carregarPeladas() {
    const grid = document.getElementById("lista-peladas");
    grid.innerHTML = ""; 
    
    // MUDANÇA: Removemos o [...peladas].reverse()
    // Agora ele percorre a array 'peladas' na ordem original (1, 2, 3...)
    peladas.forEach(pelada => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>📅 ${pelada.data}</h3>
            <p>${pelada.local}</p>
            <p style="color: #888; font-size: 0.9rem; margin-top:10px">Clique para ver as estatísticas</p>
        `;
        card.onclick = () => abrirModalPelada(pelada);
        grid.appendChild(card);
    });
}

// --- SISTEMA DE MODAL ---

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}
if(closeBtn) closeBtn.onclick = fecharModal;
window.onclick = (event) => { if (event.target == modal) fecharModal(); }

function abrirModalJogador(jogador) {
    // Foto com borda LARANJA (#ff9800)
    modalBody.innerHTML = `
        <div style="text-align:center">
            <img src="${jogador.foto}" style="width:120px; border-radius:50%; border:3px solid #ff9800">
            <h2>${jogador.nome}</h2>
            <br>
            <div class="modal-stat-row"><span>Peladas:</span> <strong>${jogador.jogos}</strong></div>
            <div class="modal-stat-row"><span>Títulos:</span> <strong style="color:#FFD700">${jogador.campeonatos} 🏆</strong></div>
            <div class="modal-stat-row"><span>Vitórias:</span> <strong>${jogador.vitorias}</strong></div>
            <div class="modal-stat-row"><span>Gols:</span> <strong>${jogador.gols}</strong></div>
            <div class="modal-stat-row"><span>Assistências:</span> <strong>${jogador.assistencias}</strong></div>
            <div class="modal-stat-row"><span>Artilharias:</span> <strong>${jogador.artilharias}</strong></div>
        </div>
    `;
    modal.style.display = "block";
}

function abrirModalPelada(pelada) {
    let destaquesHtml = `
        <h2 style="margin-bottom: 5px;">Resumo da Rodada</h2>
        <p style="text-align:center; color:#888; margin-bottom: 20px;">${pelada.data} - ${pelada.local}</p>
        <div class="match-highlights">
            <div class="highlight-badge">🏆 <span>Campeão: <strong>${pelada.campeao}</strong></span></div>
            <div class="highlight-badge">⚽ <span>Artilheiro: <strong>${pelada.artilheiro}</strong></span></div>
        </div>
    `;

    let timesHtml = '<div class="teams-grid">';
    pelada.times.forEach(time => {
        let jogadoresRows = time.jogadores.map(j => `
            <tr>
                <td class="player-row"><strong>${j.nome}</strong></td>
                <td>${j.g}</td>
                <td>${j.a}</td>
            </tr>
        `).join('');

        timesHtml += `
            <div class="team-card">
                <table class="team-table">
                    <thead>
                        <tr class="${time.classeCor}">
                            <th colspan="3" class="team-header">${time.nome}</th>
                        </tr>
                        <tr class="team-stats-row">
                            <td colspan="3">
                                <div class="stats-container" style="font-size: 0.8rem;">
                                    <span style="color:#4caf50">V: ${time.stats.v}</span>
                                    <span>E: ${time.stats.e}</span>
                                    <span style="color:#f44336">D: ${time.stats.d}</span>
                                    <span>GP: ${time.stats.gp}</span>
                                    <span>GC: ${time.stats.gc}</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="col-header">
                            <th style="text-align:left; padding-left:15px">Jogador</th>
                            <th>G</th>
                            <th>A</th>
                        </tr>
                    </thead>
                    <tbody>${jogadoresRows}</tbody>
                </table>
            </div>
        `;
    });
    timesHtml += '</div>';

    let goleirosHtml = '';
    if (pelada.goleiros && pelada.goleiros.length > 0) {
        let rows = pelada.goleiros.map(g => `
            <tr>
                <td class="player-row" style="text-align:center !important; padding-left:0 !important"><strong>${g.nome}</strong></td>
                <td>${g.semGols || (g.golsSofridos === 0 ? 1 : 0)}</td>
                <td>${g.golsSofridos}</td>
            </tr>
        `).join('');
        // Título "Goleiros" em LARANJA (#ff9800)
        goleirosHtml = `
            <div class="goleiros-section">
                <h3 style="text-align:center; margin-bottom:15px; color:#ff9800; text-transform:uppercase; font-size:1rem;">Goleiros</h3>
                <div class="team-card" style="max-width: 400px; margin: 0 auto;">
                    <table class="team-table">
                        <thead>
                            <tr class="header-goleiro"><th>Nome</th><th>Sem Gols</th><th>Gols Sofridos</th></tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = destaquesHtml + timesHtml + goleirosHtml;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// --- MENU E INICIALIZAÇÃO ---
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-links');
if (mobileMenu) { mobileMenu.addEventListener('click', () => { navList.classList.toggle('active'); }); }
document.querySelectorAll('.nav-links li a').forEach(link => { link.addEventListener('click', () => { if(navList) navList.classList.remove('active'); }); });

document.addEventListener("DOMContentLoaded", () => {
    carregarRanking(); 
    carregarJogadores();
    carregarGoleiros(); 
    carregarPeladas();
});
// --- FUNÇÃO PARA GERAR OS PÓDIOS (TOP 3) ---
function carregarPodios() {
    // 1. Pódio de Vitórias
    const topVitorias = [...jogadores]
        .sort((a, b) => b.vitorias - a.vitorias || b.jogos - a.jogos)
        .slice(0, 3);
    renderizarPodio("podio-vitorias", topVitorias, "vitorias");

    // 2. Pódio de Gols
    const topGols = [...jogadores]
        .sort((a, b) => b.gols - a.gols || b.jogos - a.jogos)
        .slice(0, 3);
    renderizarPodio("podio-gols", topGols, "gols");

    // 3. Pódio de Assistências
    const topAssistencias = [...jogadores]
        .sort((a, b) => b.assistencias - a.assistencias || b.jogos - a.jogos)
        .slice(0, 3);
    renderizarPodio("podio-assistencias", topAssistencias, "assistencias");
}

// Função auxiliar que monta o HTML de cada pódio
function renderizarPodio(elementId, listaJogadores, statKey) {
    const container = document.getElementById(elementId);
    if (!container) return;

    let html = "";
    
    // Precisamos identificar quem é 1º, 2º e 3º para aplicar as classes CSS corretas
    // A lista já vem ordenada do maior para o menor [0]=1º, [1]=2º, [2]=3º
    
    // 2º LUGAR (Fica na esquerda visualmente)
    if (listaJogadores[1]) {
        html += criarHtmlBarra(listaJogadores[1], "second", "place-2", statKey);
    } else {
        // Placeholder se não tiver 2º lugar
        html += `<div class="podium-place place-2 second"></div>`; 
    }

    // 1º LUGAR (Fica no meio visualmente)
    if (listaJogadores[0]) {
        html += criarHtmlBarra(listaJogadores[0], "first", "place-1", statKey);
    }

    // 3º LUGAR (Fica na direita visualmente)
    if (listaJogadores[2]) {
        html += criarHtmlBarra(listaJogadores[2], "third", "place-3", statKey);
    } else {
        html += `<div class="podium-place place-3 third"></div>`;
    }

    container.innerHTML = html;
}

function criarHtmlBarra(jogador, tamanhoClasse, ordemClasse, statKey) {
    // Pega o valor da estatística (vitorias, gols ou assistencias)
    const valor = jogador[statKey];
    
    return `
        <div class="podium-place ${ordemClasse} ${tamanhoClasse}">
            <img src="${jogador.foto}" class="podium-avatar" alt="${jogador.nome}" title="${jogador.nome}">
            <div class="podium-bar">
                <span class="stat-value">${valor}</span>
            </div>
            <div style="font-size:0.8rem; margin-top:5px; color:#ccc; font-weight:bold">${jogador.nome}</div>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", () => {
    carregarRanking(); 
    carregarJogadores();
    carregarGoleiros(); 
    carregarPeladas();
    carregarPodios(); // <--- ADICIONE ISSO
});