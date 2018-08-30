import config from '../../utils/config.js';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        listShow: true,
        keyWord: '',
        resultTotal: 0,
        pn: 0,
        rn: 30,
        detailData: {
            "id": "32",
            "title": "豆香红烧猪蹄",
            "tags": ["家常菜","通乳","丰胸","咸香","宴请","红烧"],
            "imtro": "豆香红烧猪蹄——此菜浓郁咸香，色泽红亮，肥而不腻，吃起来略有嚼劲。 我不是一个喜欢特别吃肉的人，但是也会在某个傍晚突然就怀念曾经吃过的某一道美味佳肴。比如在某天晚上，突然就怀念猪脚的味道，怀念猪蹄小茎的柔韧口感，怀念直接翻炒开花后煮制的黄豆的独特香味，于是乎就有了这道豆香红烧猪蹄。黄豆和猪脚一直是经典的搭配，最常见的便是黄豆炖猪脚了，但是今天的搭配，虽然原料没有改变，但是因为烹饪手法的不同，味道也完全不一样。比起炖煮，红烧的味道更浓、更香、更让人回味。 因为喜欢略有嚼劲，所以我炖煮的时间相对短一些，所以因为比较干香，吃起来不觉得油腻，对于无肉不欢的男人，这个绝对是一道无法抗拒的菜肴，但是我想对于不喜欢吃肉的mm来说，肯定也会爱上这样一款富含胶原蛋白但是一点也不油腻的豆香红烧猪蹄。",
            "ingredients": "猪蹄,500g;黄豆,100g",
            "burden": "姜,适量;大葱,适量;冰糖,适量;酱油,适量;八角,适量;盐,适量;料酒,适量;干辣椒,适量",
            "albums": [
                "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/0\/32_178879.jpg"
            ],
            "steps": [
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_8fd09a079fd6b17a.jpg",
                    "step": "1.猪蹄洗净斩块, 冷水下锅煮沸后加入料酒，继续煮5分钟。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_d91244d573ea1df2.jpg",
                    "step": "2.焯好的猪蹄在冷水下冲洗干净、沥干水分备用。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_5bd0eb39839ecb1f.jpg",
                    "step": "3.热锅放油，将备好的黄豆炒至开花。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_96157cd082732b55.jpg",
                    "step": "4.准备一个大砂锅，将姜片和葱段平铺在底部备用。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_497ce7ed747536c1.jpg",
                    "step": "5.将炒好的黄豆倒入砂锅内。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_3d4e3020be05242c.jpg",
                    "step": "6.锅中加入适量油, 放入5、6粒冰糖, 小火慢慢熬制至冰糖全部融化。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_d782687235f5e4c2.jpg",
                    "step": "7.加入猪蹄翻炒。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_e19f1335016b8a2b.jpg",
                    "step": "8.越炒颜色越深，炒至猪蹄均匀上色即可。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_db6b2fca3869a6ab.jpg",
                    "step": "9.加入辣椒、大料等香料炒香。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_3a639758b31bf0f8.jpg",
                    "step": "10.沿着锅边喷入料酒,加入酱油（一勺生抽半勺老抽）、盐炒均后加入适量清水煮沸。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_f4ac3e47c3986a6b.jpg",
                    "step": "11.倒入砂锅。"
                },
                {
                    "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_57d6720495505abb.jpg",
                    "step": "12.加盖焖煮一至两个小时即可。（中间要不时翻一下，让其更加均匀上色）"
                }
            ]
        },
        resultItem: [
            {
                "id": "32",
                "title": "豆香红烧猪蹄",
                "tags": "家常菜;通乳;丰胸;咸香;宴请;红烧;朋友聚餐;2小时以上;1-2人;催乳;下奶;锅子",
                "imtro": "豆香红烧猪蹄——此菜浓郁咸香，色泽红亮，肥而不腻，吃起来略有嚼劲。 我不是一个喜欢特别吃肉的人，但是也会在某个傍晚突然就怀念曾经吃过的某一道美味佳肴。比如在某天晚上，突然就怀念猪脚的味道，怀念猪蹄小茎的柔韧口感，怀念直接翻炒开花后煮制的黄豆的独特香味，于是乎就有了这道豆香红烧猪蹄。黄豆和猪脚一直是经典的搭配，最常见的便是黄豆炖猪脚了，但是今天的搭配，虽然原料没有改变，但是因为烹饪手法的不同，味道也完全不一样。比起炖煮，红烧的味道更浓、更香、更让人回味。 因为喜欢略有嚼劲，所以我炖煮的时间相对短一些，所以因为比较干香，吃起来不觉得油腻，对于无肉不欢的男人，这个绝对是一道无法抗拒的菜肴，但是我想对于不喜欢吃肉的mm来说，肯定也会爱上这样一款富含胶原蛋白但是一点也不油腻的豆香红烧猪蹄。",
                "ingredients": "猪蹄,500g;黄豆,100g",
                "burden": "姜,适量;大葱,适量;冰糖,适量;酱油,适量;八角,适量;盐,适量;料酒,适量;干辣椒,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/0\/32_178879.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_8fd09a079fd6b17a.jpg",
                        "step": "1.猪蹄洗净斩块, 冷水下锅煮沸后加入料酒，继续煮5分钟。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_d91244d573ea1df2.jpg",
                        "step": "2.焯好的猪蹄在冷水下冲洗干净、沥干水分备用。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_5bd0eb39839ecb1f.jpg",
                        "step": "3.热锅放油，将备好的黄豆炒至开花。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_96157cd082732b55.jpg",
                        "step": "4.准备一个大砂锅，将姜片和葱段平铺在底部备用。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_497ce7ed747536c1.jpg",
                        "step": "5.将炒好的黄豆倒入砂锅内。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_3d4e3020be05242c.jpg",
                        "step": "6.锅中加入适量油, 放入5、6粒冰糖, 小火慢慢熬制至冰糖全部融化。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_d782687235f5e4c2.jpg",
                        "step": "7.加入猪蹄翻炒。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_e19f1335016b8a2b.jpg",
                        "step": "8.越炒颜色越深，炒至猪蹄均匀上色即可。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_db6b2fca3869a6ab.jpg",
                        "step": "9.加入辣椒、大料等香料炒香。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_3a639758b31bf0f8.jpg",
                        "step": "10.沿着锅边喷入料酒,加入酱油（一勺生抽半勺老抽）、盐炒均后加入适量清水煮沸。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_f4ac3e47c3986a6b.jpg",
                        "step": "11.倒入砂锅。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/1\/32_57d6720495505abb.jpg",
                        "step": "12.加盖焖煮一至两个小时即可。（中间要不时翻一下，让其更加均匀上色）"
                    }
                ]
            },
            {
                "id": "208",
                "title": "啤酒烧猪蹄",
                "tags": "家常菜;通乳;丰胸;春节;白领;胶原蛋白;催乳;下奶;冬季菜谱",
                "imtro": "很喜欢用啤酒做菜，只要肉类一经过啤酒加工，味道就会变的好吃多，这次猪蹄用啤酒来做，得到老公的称赞。我就吃一块儿猪蹄，其它都被老公啃完了，本来想留几块明天早上光线好点再拍照，可惜没有了。",
                "ingredients": "猪蹄,400g;啤酒,330ml",
                "burden": "油,适量;盐,适量;老抽,适量;姜片,适量;蒜,适量;八角,适量;葱结,适量;冰糖,适量;酱油,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/208_517567.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_cb23669ec5c15379.jpg",
                        "step": "1.所有材料洗净，猪蹄焯水备用"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_e48fb33e2b12f772.jpg",
                        "step": "2.锅里放油加入冰糖炒糖色，下猪蹄翻炒至上色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_9ef92564de995f0d.jpg",
                        "step": "3. 加入老抽和酱油炒至上色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_4b689b51fc4f676c.jpg",
                        "step": "4. 加入适量的盐翻炒均匀"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_f4f23dba00400e15.jpg",
                        "step": "5. 最后放入姜、蒜、八角炒下"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_daff1151d0668bf5.jpg",
                        "step": "6. 倒入啤酒至淹没"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_d5c93e012e0cec87.jpg",
                        "step": "7. 加入一个葱结，大火煮开后关火"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_5006134cff681b9a.jpg",
                        "step": "8.转入高压锅里，中火压上12分钟即可"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/208_1b1d40e9e1b06c1a.jpg",
                        "step": "9.出锅盛盘"
                    }
                ]
            },
            {
                "id": "276",
                "title": "红烧猪蹄",
                "tags": "家常菜;通乳;丰胸;红烧;催乳;下奶;电压力煲",
                "imtro": "我们都知道，猪蹄富含各种营养和胶原蛋白，是美容养颜佳品，非常适合爱漂亮的女性食用。 红烧猪蹄味浓适口，肥而不腻，营养丰富，有助于脾胃健康！ 一般在家里做红烧猪蹄，我喜欢用电压力煲来炖猪蹄，不但能让猪蹄煮得更香浓、软糯，而且还不用担心糊锅。 蹄髈中含有较多的蛋白质、脂肪和碳水化合物，可加速新陈代谢，延缓机体衰老，并且对于哺乳期妇女能起到催乳和美容的双重作用，另外具通乳脉，滑肌肤、去寒热、托痈疽、发疮毒、抗老防癌之功效，特别适宜于经常四肢乏力、两腿抽筋、麻木、消化道出血、失血休克及缺血性脑病患者食之。",
                "ingredients": "猪蹄,2个;西兰花,150g",
                "burden": "葱,适量;姜,适量;大蒜,适量;干红辣椒,适量;桂皮,适量;八角,适量;花椒,适量;丁香,2粒;香叶,1片;冰糖,适量;黄酒,适量;酱油,适量;盐,适量;醋,适量;水,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/276_431493.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_c42c772efeebb635.jpg",
                        "step": "1.最主要材料 买猪蹄的时候让商家从中间片开后剁成小块，然后泡洗干净"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_d93effb8e6f8ea5e.jpg",
                        "step": "2.锅中加水将猪蹄焯烫5分钟去掉血水后捞出沥干"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_ac5f3b9133f98d20.jpg",
                        "step": "3.炒糖色：炒锅加热后倒油，加热适量冰糖，变为褐色冒小泡时下入猪蹄翻炒上色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_c71bcfc0fa0ec3fb.jpg",
                        "step": "4.加入葱、姜、蒜、辣椒炒出香味后烹饪黄酒和适量的醋"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_bbb7730e6761701a.jpg",
                        "step": "5.加入酱油也可以加入适量老抽来调节颜色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_9a9ff301e0cae941.jpg",
                        "step": "6.加入刚刚可以没过主料的水和各种香料烧开"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_a86d555badc9c3c0.jpg",
                        "step": "7.倒入电压力锅中，加入适量的盐"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_b9b603c11350c649.jpg",
                        "step": "8.盖好盖子，启动高压锅，保压约50分钟。待自然泄压后打开，装盘。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_ab49b06974a1ec85.jpg",
                        "step": "9.这段时间可以将西兰花摆成小朵，用油盐水焯烫、过凉。控干后加少许蒜泥、盐、味精拌一下，围在摆好盘的红烧猪蹄四周。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/3\/276_c1a6de13c0645a5f.jpg",
                        "step": "10.取适量的汤汁加入到炒锅中，大火收至汤汁浓稠后，浇在炖好的猪蹄表面即可。"
                    }
                ]
            },
            {
                "id": "411",
                "title": "红焖猪蹄",
                "tags": "闽菜;家常菜;通乳;丰胸;老年人;咸;青少年;白领;冬季;红焖;2小时以上;3-4人;催乳;下奶;炒锅",
                "imtro": "红焖猪蹄是闽菜系中一道比较有名的菜品，是当地各大酒店的特色菜，猪蹄含有丰富的胶原蛋白质，脂肪含量也比肥肉低，们把猪蹄称为“美容食品”和“类似于熊掌的美味佳肴”。 这道菜中运用了栗子，现在市场很少有卖，我给换成土豆了，软软糯糯的也很好吃。此菜的特点是红润油亮，调味精美，质地软烂，香醇宜人。",
                "ingredients": "猪蹄,2个;香菇,50g;土豆,100g",
                "burden": "八角,2个;花椒,1g;陈皮,2g;酱油,90ml;白糖,25g;香油,2ml;绍酒,15ml;水淀粉,适量;味精,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/411_733934.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_56c534815dd24ad1.jpg",
                        "step": "1.将猪蹄刮洗干净，剁成小块用清水泡2小时。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_144ed7d382034ab4.jpg",
                        "step": "2.提前泡发香菇。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_e7e57d9a500afb95.jpg",
                        "step": "3.土豆切成块。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_cf82be1be7ffb9f5.jpg",
                        "step": "4.锅中放水加入葱姜和绍酒下入猪蹄。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_95efafbc9c4d1ed9.jpg",
                        "step": "5.水开后煮3分钟。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_c88f090cd1fe22ab.jpg",
                        "step": "6.把猪蹄捞出控干水分，加入酱油和绍酒腌制。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_e24a5ebaf35ef202.jpg",
                        "step": "7.用纱布包好八角 花椒 陈皮制成料包。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_fb93bd0faa6a31d4.jpg",
                        "step": "8.锅中放油烧至七成热放入用酱油摸匀的猪蹄。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_e5feab22ab734c5b.jpg",
                        "step": "9.炸3分钟后捞出。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_9a547c4bca6444b1.jpg",
                        "step": "10.锅中留底油放入白糖。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_f482f3705626da10.jpg",
                        "step": "11.炒成棕红色的糖色。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_879c817bc72e06ca.jpg",
                        "step": "12.倒入猪蹄翻炒均匀后加入酱油绍酒翻炒均匀。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_94d3919051ca56a2.jpg",
                        "step": "13.放入汤锅加入水 没过猪蹄。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_ea53ae729ef1b123.jpg",
                        "step": "14.加入泡发好的香菇。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_62a12710118e7caa.jpg",
                        "step": "15. 放入料包烧开。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_2f2cdd34b51db7c6.jpg",
                        "step": "16.转小火焖至3小时。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_c81189dc82ce48f1.jpg",
                        "step": "17.焖至好的猪蹄倒入炒锅中，取出料包，加入盐和土豆丁继续焖至土豆丁软烂。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/5\/411_4f6fd6ec9bb90fd8.jpg",
                        "step": "18.芶入水淀粉加入味精调味，淋入香油即可。"
                    }
                ]
            },
            {
                "id": "535",
                "title": "浓香猪蹄花生煲",
                "tags": "食材;家常菜;通乳;丰胸;骨质疏松;煲;抗疲劳;健忘;午餐;晚餐;提神;补钙;全菜系;2小时以上;1-2人;健脾;益智;待客菜;健脑益智;健脑;催乳;下奶;健脾胃;补锌;增强记忆力;炒锅;脾虚",
                "imtro": "花生能增强记忆，抗老化，延缓脑功能衰退，滋润皮肤。 花生还有扶正补虚、悦脾和胃、润肺化痰、滋养调气、利水消肿、止血生乳、清咽止疟的作用。 猪蹄是美容佳品，里面的胶原蛋白，是滋养肌肤的最佳来源。 此道汤煲可养血声精、滋养肌肤，是秋冬季节女人的滋补汤。",
                "ingredients": "猪蹄,1个;花生,100g",
                "burden": "红枣,3粒;姜片,适量;大料,3个;当归,适量;参片,适量;盐,适量;胡椒粉,1·5g;桂皮,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/535_417059.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_6e9e9be9ec8c10d9.jpg",
                        "step": "1.准备好所有的食材。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_a03d6559a1cbbea3.jpg",
                        "step": "2.把调料准备好。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_577a203bf8c9cc0d.jpg",
                        "step": "3.猪蹄剁小块用清水冲洗10分钟。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_6cc57f88b527fb49.jpg",
                        "step": "4.花生米用开水煮上5分钟，捞出沥干水分备用。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_ce3b2b41d0424543.jpg",
                        "step": "5.洗净的猪蹄开水焯烫过凉。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_324493d55416c813.jpg",
                        "step": "6.可把上面的猪毛剔除干净。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_6d4f43088162deae.jpg",
                        "step": "7.煮过的花生放入沙锅底部。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_9cf0ff4f9e53aea1.jpg",
                        "step": "8.再放上猪蹄。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_b2b98aa48a57e376.jpg",
                        "step": "9.加入调味料。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_695a8b539d7ee839.jpg",
                        "step": "10.加入料酒。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_ac1af2d99d60ec64.jpg",
                        "step": "11.加适量的清水。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_ac4c409d12a9a1e6.jpg",
                        "step": "12.大火煮开，关小火，然后盖子四周围用锡纸密封，保证不漏气。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_6d8f105c3cc94c0f.jpg",
                        "step": "13.小伙炖煮1个半小时后打开盖子加入盐。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/535_4ae8fdbb3dc7f856.jpg",
                        "step": "14.再加胡椒粉调味剂好。"
                    }
                ]
            },
            {
                "id": "580",
                "title": "黄豆炖猪蹄",
                "tags": "食材;家常菜;私房菜;通乳;丰胸;骨质疏松;咸;炖;孕妇;白领;补钙;降低胆固醇;催乳;下奶;贴秋膘",
                "imtro": "黄豆炖猪蹄是以黄豆和猪蹄为主要食材的私房菜，口味浓香，营养价值丰富，美容养颜抗衰老，适合多种人群食用。猪蹄富含胶原蛋白，可以增加皮肤弹性，所以可以美容。它还具有催乳效果，尤其是和黄豆炖在一起，可以使产妇下奶。所以对于女性朋友来说，都非常有食物价值。",
                "ingredients": "黄豆,50g;猪蹄,380g",
                "burden": "油,适量;盐,适量;姜,适量;冰糖,适量;葱姜蒜,适量;香叶,适量;桂皮,适量;醋,适量;开水,适量;啤酒,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/580_889121.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_239a380d20a34a30.jpg",
                        "step": "1.准备好所有材料，黄豆用水浸泡至体积变大。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_549dcdcba72265d2.jpg",
                        "step": "2.把猪蹄从中间切开一刀。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_a22507cbfcff9c43.jpg",
                        "step": "3.冷水将猪蹄放入锅中，放入几片姜，煮至水开。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_ee80e7c7a5ae1a89.jpg",
                        "step": "4.捞出后，把猪蹄切成小块。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_6b123aa4aebf755d.jpg",
                        "step": "5.锅里倒入油，放入冰糖，炒到糖化掉。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_8765387a2d08ec7b.jpg",
                        "step": "6.倒入猪蹄翻炒，把表面裹上糖色。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_76ead913ed3f8ae1.jpg",
                        "step": "7.倒入葱姜蒜和香叶、桂皮翻炒。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_40cfdc6ebffadb7b.jpg",
                        "step": "8.倒入适量醋。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_c6a9daf1497ff714.jpg",
                        "step": "9.加入开水。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_9ede756017648fa2.jpg",
                        "step": "10.倒入黄豆。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_51ae0557312325ba.jpg",
                        "step": "11.加入少许啤酒。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_aa728d9d058e1b8d.jpg",
                        "step": "12.加入适量盐，盖上锅盖，中火炖到收汁。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_07241cc9ea3c51af.jpg",
                        "step": "13.收汁后，关火加入味精。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/6\/580_7a1f5deda751ae9a.jpg",
                        "step": "14.食用前可撒少许香菜。"
                    }
                ]
            },
            {
                "id": "659",
                "title": "红焖猪蹄",
                "tags": "闽菜;家常菜;通乳;丰胸;老年人;咸;青少年;白领;秋季;红焖;2小时以上;1-2人;催乳;下奶;炒锅",
                "imtro": "红焖猪蹄，是闽菜的一款经典菜式。在厦门，很多的酒楼食肆，都拿它来当招牌菜。虽然各家的做法不同，不过，基本上都会用上板栗和一些香料。这个菜香味浓郁，猪蹄软糯可口，非常好吃。而且，猪蹄含有丰富的胶原蛋白，适合女人吃，家里俩MM吃正好，爱她，就做好吃的给她，哈哈。",
                "ingredients": "猪蹄,650g;板栗,300g;水发香菇,100g",
                "burden": "姜蒜,适量;生抽,适量;盐,适量;白糖,适量;料酒,适量;小茴香,适量;八角,适量;陈皮,1片;花椒,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/659_541251.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_00742982e626dfa2.jpg",
                        "step": "1.猪蹄一只，洗净切大块。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_caecda2466dbc111.jpg",
                        "step": "2.将猪蹄焯水。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_57d6d7de83e6de8d.jpg",
                        "step": "3.焯水的猪蹄盛起摊凉。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_520cd930383f44f2.jpg",
                        "step": "4.摊凉的猪蹄加生抽，料酒抹匀腌制一下。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_471af0ae5020ee0d.jpg",
                        "step": "5.板栗去皮洗净。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_93851079a9fbaf46.jpg",
                        "step": "6.起锅加入适量的油，8成热的时候，将板栗下锅炸1分钟，盛起待用。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_3c770fe0f4f244c7.jpg",
                        "step": "7.冬菇发好对切待用"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_16ae604d88e555ab.jpg",
                        "step": "8.将稍微腌制的猪蹄下锅，炸至表皮有点发黄。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_030dc5012ce7c98e.jpg",
                        "step": "9.炸好的猪蹄盛起待用。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_4f7355d85a5de9c4.jpg",
                        "step": "10.另起油锅，将姜葱煸香，下猪蹄，加水盖过猪蹄，下切好的冬菇，盐、生抽、料酒、小茴香、八角、花椒、陈皮一起，大火烧开，文火炖一个小时。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_a65cffd22ba7db92.jpg",
                        "step": "11.将板栗加入锅里，再焖30分钟就行了"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/659_08bbdac0e5b32760.jpg",
                        "step": "12.焖好的猪蹄，好吃哦，嘿嘿。"
                    }
                ]
            },
            {
                "id": "668",
                "title": "高升猪蹄",
                "tags": "家常菜;私房菜;通乳;丰胸;女性;胶原蛋白;增强抵抗力;催乳;下奶;贴秋膘",
                "imtro": "高升排骨大家并不陌生，这是一道非常受大家喜欢的菜谱。 这道菜不仅可以寓意步步高升，而且12345的调料比例， 可以让新手做出惊艳的味道来。 今天我用这经典的比例，做出了同样好味道的高升猪蹄来。 味道还是一样的美妙，这经典的比例真可谓是百试不厌。。",
                "ingredients": "猪蹄,500g",
                "burden": "油,适量;白糖,适量;生抽,适量;料酒,适量;醋,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/668_688980.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_73e0145a215f8e03.jpg",
                        "step": "1.准备材料：猪蹄500g，葱蒜适量"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_572dc8104289fdb3.jpg",
                        "step": "2.烧开一锅水放入猪蹄焯水"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_91267e4e8e5ca41b.jpg",
                        "step": "3.将焯过水的猪蹄洗净"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_cf780b3d28a6fb8c.jpg",
                        "step": "4.热锅倒油放入姜蒜爆香，倒入焯过水的猪蹄翻炒至表面略焦"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_4f636a2c18e480df.jpg",
                        "step": "5.调入1汤匙料酒，2汤匙醋，3汤匙白糖，4汤匙鲜味酱油 翻炒均匀"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_88ee94de44478a8c.jpg",
                        "step": "6.将翻炒均匀的猪蹄倒入砂锅里"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_f30f5df17f6cfec8.jpg",
                        "step": "7.加入1小碗的清水。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_6a0804d7a923be95.jpg",
                        "step": "8.大火烧开，小火慢炖2小时左右。煮至猪蹄酥烂。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/7\/668_5c502a0e0274446e.jpg",
                        "step": "9.最后火收汁，撒上香菜碎即可出锅"
                    }
                ]
            },
            {
                "id": "965",
                "title": "麻辣猪蹄",
                "tags": "家常菜;私房菜;麻辣;女士;软糯",
                "imtro": "猪蹄，又叫猪脚、猪手，前蹄为猪手，后蹄为猪脚。含有丰富的胶原蛋白质，人体中胶原蛋白质缺乏，是人衰老的一个重要因素。它能防治皮肤干瘪起皱、增强皮肤弹性和韧性，对延缓衰老和促进儿童生长发育都具有物殊意义。",
                "ingredients": "猪蹄,500g",
                "burden": "冰糖,适量;干花椒,适量;干辣椒,适量;香叶,适量;大料,适量;老抽,适量;盐,适量;料酒,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/1\/965_441883.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_dc83a3441da574f3.jpg",
                        "step": "1.猪蹄一切两半，也可以剁成小块 冷水下锅，倒入料酒焯水"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_4b22e1833ec9a295.jpg",
                        "step": "2.水开煮出血沫后"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_33854c6d8e521db4.jpg",
                        "step": "3.用流水冲洗干净"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_bcf74c4f7dc499f4.jpg",
                        "step": "4.沥干水份"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_c2192b66aae8b48b.jpg",
                        "step": "5.辣椒剪段去籽不要"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_1e6fd41d0094ecb7.jpg",
                        "step": "6.冰糖敲成小块"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_240cfd9e31399ca1.jpg",
                        "step": "7.锅里放少许油，把冰糖放锅里慢慢熬成褐色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_f1cdee4414413c1c.jpg",
                        "step": "8.倒入干辣椒与干花椒炒出麻辣味，因为有糖液，所以容易糊锅，火候就显得比较重要，用最小的火慢慢的翻炒"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_d8e95bd0f6b24a41.jpg",
                        "step": "9.然后把焯过水的猪蹄放进锅里"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_9353d79cb54785ca.jpg",
                        "step": "10.均匀上色"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_d2220ba496222d8a.jpg",
                        "step": "11.转入炖锅里"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_cb1bb2ee113d5822.jpg",
                        "step": "12.加水没过猪蹄或更高一些"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_39fb4b988deaaace.jpg",
                        "step": "13.把香叶，桂皮，八角等香料放进锅里"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/10\/965_427ed3d431d28870.jpg",
                        "step": "14.在起锅前十分钟放入盐，大火烧开转小火，慢慢的炖至蹄花皮糯肉酥，在起锅前十分钟放入盐，色泽红亮时就可以收汁起锅了。"
                    }
                ]
            },
            {
                "id": "1125",
                "title": "甜面酱香菇猪蹄",
                "tags": "通乳;丰胸;炒;煎;胶原蛋白;快手菜;夏季饮食;催乳;下奶",
                "imtro": "经过肉摊位 看到这猪蹄满可爱滴 难得这么肉肉的DD会吸引到我 于是就带它回家了 顺着也为家里人贴贴秋膘 这次跟猪蹄的是用了甜面酱 用了甜面酱后像用冰糖的这一过程即可省去 用了甜面酱代替糖 猪蹄上色更加均匀及好看哦 红红的亮亮的 送上先希望你们喜欢哦",
                "ingredients": "猪蹄,1200g",
                "burden": "香菇,适量;甜面酱,适量;酱油,适量;姜,适量;蒜,适量",
                "albums": [
                    "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/t\/2\/1125_683545.jpg"
                ],
                "steps": [
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_4f8dc7971b0e2ba7.jpg",
                        "step": "1.备猪蹄，香菇，甜面酱，酱油，姜，蒜头。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_45afcc4b33aab135.jpg",
                        "step": "2.香菇洗净泡温水至发。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_f70e71059eeaa158.jpg",
                        "step": "3.猪蹄用白醋，白酒清洗腌制。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_1cb0b993101b7f7b.jpg",
                        "step": "4.热干锅，将处理好的猪蹄下锅。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_cce76c519b9bfed0.jpg",
                        "step": "5.放入锅中煎炒"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_27bf39f91be54c38.jpg",
                        "step": "6.将煎炒好的猪蹄下高压锅。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_ac0103c157e54fd8.jpg",
                        "step": "7.加入适量酱油。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_2161564b2100bae8.jpg",
                        "step": "8.加适量甜面酱。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_cb82eef96fcb7b1a.jpg",
                        "step": "9.拌至均匀挂味。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_4fcf2d66dd42c2b5.jpg",
                        "step": "10.再将香菇水沉淀后下锅。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_09016101b432fdac.jpg",
                        "step": "11.再将香菇改刀，跟姜蒜一起下锅。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_5ef6ecae8606bcf1.jpg",
                        "step": "12.焖煮至十五分钟。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_70da0d379132cfde.jpg",
                        "step": "13.减压再出高压锅下至炒锅中。"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_469ad5fb8868919c.jpg",
                        "step": "14.翻炒至于收汁挂味即可"
                    },
                    {
                        "img": "http:\/\/juheimg.oss-cn-hangzhou.aliyuncs.com\/cookbook\/s\/12\/1125_373b5b92c0edb97c.jpg",
                        "step": "15.一份甜面酱香菇猪蹄完成。"
                    }
                ]
            }],
    },

    toSearch: function () {
        let keyWord = this.data.keyWord;
        console.log(keyWord)
        wx.showLoading({ title: '加载中...' })
        wx.request({
            url: `http://apis.juhe.cn/cook/query.php?key=${config.apiKey}&menu=${encodeURIComponent(keyWord)}`,
            success: (res) => {
                wx.hideLoading();
                let data = res.data;
                console.log(data)
                if (data.resultcode == 200) {
                    this.setData({
                        resultItem: data.result.data || [],
                        resultTotal: data.result.totalNum,
                        listShow: true,
                    })
                } else if (data.resultcode == 202) {
                    wx.showToast({
                        title: `没有搜到 ${keyWord} 的结果`,
                        icon: 'none',
                        duration: 2000
                    })
                } else {
                    wx.showModal({
                        title: '搜索出错',
                        content: data.reason
                    })
                }
            },
            fail: () => {
                wx.hideLoading();
                wx.showModal({
                    title: '搜索出错',
                    content: '为什么'
                })
            }
        })
    },

    toDetail: function(e) {
        let index = e.currentTarget.dataset.index;
        let detailData = this.data.resultItem[index];
    },

    bindKeyInput: function (e) {
        this.setData({
            keyWord: e.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})