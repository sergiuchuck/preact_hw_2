const data = {
    "ok": true,
    "header": {
        "patient_info": {
            "id": "123",
            "dob": "20.11.1990",
            "gender": "M"
        },
        "healthcare_professional": {
            "name": "Carlos Doctor1Deploy M.D.",
            "address_string_1": "37553 Sorrento Valley Blvd",
            "address_string_2": "Greenwood, WA 98103 US"
        },
        "approver": {
            "position": "Laboratory Director",
            "name": "Linda Wasserman, M.D., Ph.D."
        },
        "test_metodology": "Genotyping by array-based evaluation of multiple molecular probes",
        "laboratory_info": {
            "collected_date": "13.04.2018",
            "report_date": "14.04.2018",
            "received_date": "15.04.2018"
        }
    },
    "results": {
        "table_of_contents": [
            {
                "type": "group",
                "name": "Болезни кожи (L00-L99)",
                "description": "Болезни кожи (L00-L99)",
                "table_of_contents": [
                    {
                        "type": "disease",
                        "id": 1,
                        "dis_tag": "MON049",
                        "name": "Акродерматит энтеропатический",
                        "icd10": "L30.8",
                        "diag_color": "3",
                        "info_perc": "16"
                    },
                    {
                        "type": "disease",
                        "id": 2,
                        "dis_tag": "SF01",
                        "name": "Реакция на загар",
                        "icd10": "4",
                        "diag_color": "3",
                        "info_perc": "27"
                    },
                    {
                        "type": "disease",
                        "id": 3,
                        "dis_tag": "SF02",
                        "name": "Морщины и деградация коллагена",
                        "icd10": "4",
                        "diag_color": "3",
                        "info_perc": "50"
                    },
                    {
                        "type": "disease",
                        "id": 4,
                        "dis_tag": "SF03",
                        "name": "Лентиго",
                        "icd10": "4",
                        "diag_color": "1",
                        "info_perc": "36"
                    },
                    {
                        "type": "disease",
                        "id": 5,
                        "dis_tag": "SF04",
                        "name": "Веснушки",
                        "icd10": "4",
                        "diag_color": "3",
                        "info_perc": "27"
                    },
                    {
                        "type": "disease",
                        "id": 6,
                        "dis_tag": "SF05",
                        "name": "Целлюлит",
                        "icd10": "4",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 7,
                        "dis_tag": "SF06",
                        "name": "Растяжки (стрии)",
                        "icd10": "4",
                        "diag_color": "1",
                        "info_perc": "25"
                    },
                    {
                        "type": "disease",
                        "id": 8,
                        "dis_tag": "SF07",
                        "name": "Варикозное расширение вен",
                        "icd10": "4",
                        "diag_color": "1",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 9,
                        "dis_tag": "SF08",
                        "name": "Экзема (Атопический дерматит)",
                        "icd10": "19",
                        "diag_color": "1",
                        "info_perc": "5"
                    },
                    {
                        "type": "disease",
                        "id": 10,
                        "dis_tag": "SF09",
                        "name": "Контактный дерматит",
                        "icd10": "4",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 11,
                        "dis_tag": "SF10",
                        "name": "Псориаз",
                        "icd10": "4",
                        "diag_color": "3",
                        "info_perc": "75"
                    },
                    {
                        "type": "disease",
                        "id": 12,
                        "dis_tag": "SF11",
                        "name": "Розацеа",
                        "icd10": "4",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 13,
                        "dis_tag": "SF12",
                        "name": "Ихтиоз",
                        "icd10": "4",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 14,
                        "dis_tag": "SF13",
                        "name": "Антиоксидантная реакция",
                        "icd10": "4",
                        "diag_color": "1",
                        "info_perc": "80"
                    },
                    {
                        "type": "disease",
                        "id": 15,
                        "dis_tag": "SF14",
                        "name": "Защита от гликации",
                        "icd10": "4",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 16,
                        "dis_tag": "17",
                        "name": "Морщинистая кожа, моногенка",
                        "icd10": "19",
                        "diag_color": "0",
                        "info_perc": "0"
                    }
                ]
            },
            {
                "type": "group",
                "name": "Витамины",
                "description": "Витамины",
                "table_of_contents": [
                    {
                        "type": "disease",
                        "id": 17,
                        "dis_tag": "SF15",
                        "name": "Дефицит витамина А",
                        "icd10": "3",
                        "diag_color": "",
                        "info_perc": "50"
                    },
                    {
                        "type": "disease",
                        "id": 18,
                        "dis_tag": "SF16",
                        "name": "Дефицит витамина B2",
                        "icd10": "3",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 19,
                        "dis_tag": "SF17",
                        "name": "Дефицит витамина B6",
                        "icd10": "3",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 20,
                        "dis_tag": "SF18",
                        "name": "Дефицит витамина B9 (фолиевой кислоты)",
                        "icd10": "3",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 21,
                        "dis_tag": "SF19",
                        "name": "Дефицит витамина B12",
                        "icd10": "3",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 22,
                        "dis_tag": "SF20",
                        "name": "Дефицит витамина C",
                        "icd10": "3",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 23,
                        "dis_tag": "SF21",
                        "name": "Дефицит витамина D",
                        "icd10": "3",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 24,
                        "dis_tag": "SF22",
                        "name": "Дефицит витамина E",
                        "icd10": "3",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 25,
                        "dis_tag": "21",
                        "name": "Эффективность рецептора витамина D",
                        "icd10": "3",
                        "diag_color": "0",
                        "info_perc": "0"
                    }
                ]
            },
            {
                "type": "group",
                "name": "Диета и метаболизм веществ",
                "description": "Диета и метаболизм веществ",
                "table_of_contents": [
                    {
                        "type": "disease",
                        "id": 26,
                        "dis_tag": "SF23",
                        "name": "Дефицит жирных кислот Омега-3 и Омега-6",
                        "icd10": "2",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 27,
                        "dis_tag": "41",
                        "name": "Ощущение горького",
                        "icd10": "9",
                        "diag_color": "1",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 28,
                        "dis_tag": "35",
                        "name": "Склонность к перекусываниям",
                        "icd10": "2",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 29,
                        "dis_tag": "36",
                        "name": "Ощущения чувства голода",
                        "icd10": "2",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 30,
                        "dis_tag": "37",
                        "name": "Переедание при стрессе",
                        "icd10": "2",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 31,
                        "dis_tag": "38",
                        "name": "Пищевая мотивация",
                        "icd10": "2",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 32,
                        "dis_tag": "MET01",
                        "name": "Метаболизм кофеина",
                        "icd10": "2",
                        "diag_color": "6",
                        "info_perc": "13"
                    },
                    {
                        "type": "disease",
                        "id": 33,
                        "dis_tag": "42",
                        "name": "Метаболизм лактозы",
                        "icd10": "2",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 34,
                        "dis_tag": "26",
                        "name": "Диета (Литех)",
                        "icd10": "2",
                        "diag_color": "",
                        "info_perc": "67"
                    },
                    {
                        "type": "disease",
                        "id": 35,
                        "dis_tag": "34",
                        "name": "Диета на основе мононенасыщеных жиров",
                        "icd10": "2",
                        "diag_color": "1",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 36,
                        "dis_tag": "34",
                        "name": "Диета на основе полиненасыщеных жиров",
                        "icd10": "2",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 37,
                        "dis_tag": "36",
                        "name": "Скорость насыщения",
                        "icd10": "2",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 38,
                        "dis_tag": "39",
                        "name": "Пристрастие к сладкому",
                        "icd10": "9",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 39,
                        "dis_tag": "40",
                        "name": "Ощущение сладкого",
                        "icd10": "9",
                        "diag_color": "",
                        "info_perc": "100"
                    }
                ]
            },
            {
                "type": "group",
                "name": "Спортивная генетика",
                "description": "Спортивная генетика",
                "table_of_contents": [
                    {
                        "type": "disease",
                        "id": 40,
                        "dis_tag": "52",
                        "name": "Чувствительность к инсулину после упражнений",
                        "icd10": "1",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 41,
                        "dis_tag": "51",
                        "name": "Уровень ЛВП холестерина после упражнений",
                        "icd10": "2",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 42,
                        "dis_tag": "45",
                        "name": "Тендинопатия Ахиллова сухожилия",
                        "icd10": "5",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 43,
                        "dis_tag": "48",
                        "name": "Снижение веса от физических упражнений",
                        "icd10": "5",
                        "diag_color": "1",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 44,
                        "dis_tag": "44",
                        "name": "Аэробная емкость легких",
                        "icd10": "5",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 45,
                        "dis_tag": "13",
                        "name": "Выносливость",
                        "icd10": "5",
                        "diag_color": "1",
                        "info_perc": "50"
                    },
                    {
                        "type": "disease",
                        "id": 46,
                        "dis_tag": "28",
                        "name": "Фитнесс (Литех)",
                        "icd10": "5",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 47,
                        "dis_tag": "15",
                        "name": "Сила",
                        "icd10": "5",
                        "diag_color": "1",
                        "info_perc": "50"
                    },
                    {
                        "type": "disease",
                        "id": 48,
                        "dis_tag": "14",
                        "name": "Скорость",
                        "icd10": "5",
                        "diag_color": "1",
                        "info_perc": "29"
                    },
                    {
                        "type": "disease",
                        "id": 49,
                        "dis_tag": "44",
                        "name": "Резкое выделение силы",
                        "icd10": "5",
                        "diag_color": "0",
                        "info_perc": "0"
                    },
                    {
                        "type": "disease",
                        "id": 50,
                        "dis_tag": "19",
                        "name": "Структура мышечного волокна",
                        "icd10": "5",
                        "diag_color": "1",
                        "info_perc": "38"
                    },
                    {
                        "type": "disease",
                        "id": 51,
                        "dis_tag": "43",
                        "name": "Силовые упражнения",
                        "icd10": "5",
                        "diag_color": "",
                        "info_perc": "100"
                    },
                    {
                        "type": "disease",
                        "id": 52,
                        "dis_tag": "49",
                        "name": "Артериальное давление после физической нагрузки",
                        "icd10": "5",
                        "diag_color": "0",
                        "info_perc": "0"
                    }
                ]
            }
        ],
        "content": [
            {
                "dis_tag": "MON049",
                "dis_type": "mono",
                "icd10": "L30.8",
                "status": "final",
                "name": "Акродерматит энтеропатический",
                "source": "Попова, EnterOmics, 2017.",
                "nosology": "Аутосомно-рецессивное генетическое заболевание, главным звеном патогенеза которого является нарушение всасывания цинка в тонком кишечнике. Для данной патологии характерны проявления, связанные с дефицитом цинка – поражение желудочно-кишечного тракта, образование сыпи, пустул и везикул на коже, алопеция, снижение иммунитета, уменьшение массы тела.",
                "analyzed_genes": "SLC39A4",
                "diag_color": "3",
                "analyzed": {
                    "done": 6,
                    "from": 37,
                    "percentage": "16%"
                },
                "recomendations": [
                    {
                        "text": "Недостаточно данных для полного анализа.",
                        "selected": 0
                    },
                    {
                        "text": "Риск заболевания отсутствует.",
                        "selected": 0
                    },
                    {
                        "text": "Вы являетесь носителем рискового статуса, возможны незначительные проявления.",
                        "selected": 1
                    },
                    {
                        "text": "Вы находитесь в существенной зоне риска.",
                        "selected": 0
                    },
                    {
                        "text": "Произошел какой-то технический сбой. Пожалуйста, сообщите об этом авторам проекта.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131168",
                        "chr": "chr8",
                        "position": "145637978",
                        "nuc_position": "c.1888G>C",
                        "amin_position": "Gly630Arg",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131167",
                        "chr": "chr8",
                        "position": "145638174",
                        "nuc_position": "c.1784G>T",
                        "amin_position": "Gly595Val",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131181",
                        "chr": "chr8",
                        "position": "145638310",
                        "nuc_position": "c.1646_1648delTGC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131180",
                        "chr": "chr8",
                        "position": "145638631",
                        "nuc_position": "c.1617delA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434288",
                        "chr": "chr8",
                        "position": "145638672",
                        "nuc_position": "c.1576G>A",
                        "amin_position": "Gly526Arg",
                        "ref": "C",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "1"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131165",
                        "chr": "chr8",
                        "position": "145638714",
                        "nuc_position": "c.1534G>T",
                        "amin_position": "Gly512Trp",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131164",
                        "chr": "chr8",
                        "position": "145638933",
                        "nuc_position": "c.1438G>T",
                        "amin_position": "Glu480Term",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131173",
                        "chr": "chr8",
                        "position": "145639340",
                        "nuc_position": "c.1287+2T>C",
                        "amin_position": "--",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131163",
                        "chr": "chr8",
                        "position": "145639400",
                        "nuc_position": "c.1229T>C",
                        "amin_position": "Leu410Pro",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131177",
                        "chr": "chr8",
                        "position": "145639401",
                        "nuc_position": "c.1224_1228delCGGGC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131176",
                        "chr": "chr8",
                        "position": "145639405",
                        "nuc_position": "c.1224delC",
                        "amin_position": "--",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs200482978",
                        "chr": "chr8",
                        "position": "145639426",
                        "nuc_position": "c.1203G>A",
                        "amin_position": "Trp401Term",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131184",
                        "chr": "chr8",
                        "position": "145639438",
                        "nuc_position": "c.1190dupC",
                        "amin_position": "--",
                        "ref": "D",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131172",
                        "chr": "chr8",
                        "position": "145639481",
                        "nuc_position": "c.1150-2A>G",
                        "amin_position": "--",
                        "ref": "T",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434289",
                        "chr": "chr8",
                        "position": "145639675",
                        "nuc_position": "c.1120G>A",
                        "amin_position": "Gly374Arg",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131159",
                        "chr": "chr8",
                        "position": "145639680",
                        "nuc_position": "c.1115T>G",
                        "amin_position": "Leu372Arg",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131160",
                        "chr": "chr8",
                        "position": "145639680",
                        "nuc_position": "c.1115T>C",
                        "amin_position": "Leu372Pro",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434291",
                        "chr": "chr8",
                        "position": "145639806",
                        "nuc_position": "c.989G>A",
                        "amin_position": "Gly330Asp",
                        "ref": "C",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "1"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131175",
                        "chr": "chr8",
                        "position": "145640112",
                        "nuc_position": "c.970_973delTCAG",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131157",
                        "chr": "chr8",
                        "position": "145640159",
                        "nuc_position": "c.926G>A",
                        "amin_position": "Cys309Tyr",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434293",
                        "chr": "chr8",
                        "position": "145640176",
                        "nuc_position": "c.909G>C",
                        "amin_position": "Gln303His",
                        "ref": "C",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "1"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs7823979",
                        "chr": "chr8",
                        "position": "145640235",
                        "nuc_position": "c.850G>A",
                        "amin_position": "Glu284Lys",
                        "ref": "C",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131154",
                        "chr": "chr8",
                        "position": "145640254",
                        "nuc_position": "c.831G>A",
                        "amin_position": "Met277Ile",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131174",
                        "chr": "chr8",
                        "position": "145640396",
                        "nuc_position": "c.766delC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs2977838",
                        "chr": "chr8",
                        "position": "145640411",
                        "nuc_position": "c.751C>T",
                        "amin_position": "Arg251Trp",
                        "ref": "A",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "3"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131183",
                        "chr": "chr8",
                        "position": "145640636",
                        "nuc_position": "c.143T>G",
                        "amin_position": "--",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131152",
                        "chr": "chr8",
                        "position": "145640647",
                        "nuc_position": "c.631C>T",
                        "amin_position": "Gln211Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434287",
                        "chr": "chr8",
                        "position": "145640679",
                        "nuc_position": "c.599C>T",
                        "amin_position": "Pro200Leu",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131171",
                        "chr": "chr8",
                        "position": "145640805",
                        "nuc_position": "c.475-2A>G",
                        "amin_position": "--",
                        "ref": "T",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434290",
                        "chr": "chr8",
                        "position": "145641350",
                        "nuc_position": "c.318C>A",
                        "amin_position": "Asn106Lys",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs182506368",
                        "chr": "chr8",
                        "position": "145641373",
                        "nuc_position": "c.295G>A",
                        "amin_position": "Ala99Thr",
                        "ref": "T",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs121434292",
                        "chr": "chr8",
                        "position": "145641385",
                        "nuc_position": "c.283C>T",
                        "amin_position": "Arg95Cys",
                        "ref": "G",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs117535951",
                        "chr": "chr8",
                        "position": "145641417",
                        "nuc_position": "c.251C>T",
                        "amin_position": "Pro84Leu",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "rs115637224",
                        "chr": "chr8",
                        "position": "145641588",
                        "nuc_position": "c.193-113T>C",
                        "amin_position": "--",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131169",
                        "chr": "chr8",
                        "position": "145641963",
                        "nuc_position": "c.192+19G>A",
                        "amin_position": "--",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131146",
                        "chr": "chr8",
                        "position": "145641990",
                        "nuc_position": "c.184T>C",
                        "amin_position": "Cys62Arg",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC39A4",
                        "polymorphism": "mut131145",
                        "chr": "chr8",
                        "position": "145642031",
                        "nuc_position": "c.143T>G",
                        "amin_position": "Leu48Term",
                        "ref": "A",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ],
                "denovo_mutations": [
                    {
                        "gene": "SLC39A4",
                        "chr": "chr8",
                        "position": "145639726",
                        "ref": "T",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "3"
                    },
                    {
                        "gene": "SLC39A4",
                        "chr": "chr8",
                        "position": "145642002",
                        "ref": "C",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "3"
                    }
                ]
            },
            {
                "dis_tag": "SF01",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Реакция на загар",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Загар кожи представляет собой накопление пигмента меланина (обеспечивает потемнение кожи) в результате воздействия ультрафиолетового излучения на кожу. Реакция на загар может значительно отличаться у разных людей и может иметь как положительное так и отрицательное влияние на здоровье кожи. Уровень меланина, скорость его образования, а также другие компоненты, связанные с загаром зависят от множества генетических параметров, которые исследуются в данном тесте.",
                "analyzed_genes": "MC1R, EXOC2, IRF4, HERC2, TYR, SLC45A2, SLC24A5, ASIP, NCOA6",
                "diag_color": "3",
                "analyzed": {
                    "done": 4,
                    "from": 15,
                    "percentage": "27%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития реакции на загар низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития реакции на загар (обгорание, кожные дефекты).",
                        "selected": 1
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "EXOC2",
                        "polymorphism": "rs12210050",
                        "chr": "chr6",
                        "position": "475489",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "HERC2",
                        "polymorphism": "rs12913832",
                        "chr": "chr15",
                        "position": "28365618",
                        "freq": "55.58",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ASIP",
                        "polymorphism": "rs1015362",
                        "chr": "chr20",
                        "position": "32738612",
                        "freq": "38",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ASIP",
                        "polymorphism": "rs4911414",
                        "chr": "chr20",
                        "position": "32729444",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "IRF4",
                        "polymorphism": "rs12203592",
                        "chr": "chr6",
                        "position": "396321",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805007",
                        "chr": "chr16",
                        "position": "89986117",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805008",
                        "chr": "chr16",
                        "position": "89986144",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "NCOA6",
                        "polymorphism": "rs4911442",
                        "chr": "chr20",
                        "position": "33355046",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC24A5",
                        "polymorphism": "rs1426654",
                        "chr": "chr15",
                        "position": "48426484",
                        "freq": "96.96",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "SLC24A5",
                        "polymorphism": "rs2555364",
                        "chr": "chr15",
                        "position": "48419386",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC45A2",
                        "polymorphism": "rs26722",
                        "chr": "chr15",
                        "position": "33963870",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SLC45A2",
                        "polymorphism": "rs16891982",
                        "chr": "chr15",
                        "position": "33951693",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "TYR",
                        "polymorphism": "rs1042602",
                        "chr": "chr11",
                        "position": "88911696",
                        "freq": "37.38",
                        "genotype": "AC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TYR",
                        "polymorphism": "rs1126809",
                        "chr": "chr15",
                        "position": "89017961",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "TYR",
                        "polymorphism": "rs1393350",
                        "chr": "chr11",
                        "position": "89011046",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF02",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Морщины и деградация коллагена",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Степень и глубина морщин может варьировать от тонких линий на коже до глубоких борозд. Образование морщин определяется как генетическими факторами, так и внешними воздействиями: возраст, вес, воздействие ультрафиолетового излучения, курение табака.",
                "analyzed_genes": "STXBP5L, MMP1",
                "diag_color": "3",
                "analyzed": {
                    "done": 1,
                    "from": 2,
                    "percentage": "50%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития морщин в связи с деградацией коллагена низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития морщин в связи с деградацией коллагена.",
                        "selected": 1
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MMP1",
                        "polymorphism": "rs1799750",
                        "chr": "chr11",
                        "position": "102670496",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "STXBP5L",
                        "polymorphism": "rs322458",
                        "chr": "chr3",
                        "position": "120585315",
                        "freq": "40.27",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF03",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Лентиго",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Пигментные пятна или лентиго представляют собой образования на коже размером от миллиметра до нескольких сантиметров и цветом от светло-желтого до коричневого. Наличие пигментных пятен свидетельствует о повреждении и старении кожи, а их внешний вид определяется генетической компонентой.",
                "analyzed_genes": "IRF4, MC1R",
                "diag_color": "1",
                "analyzed": {
                    "done": 4,
                    "from": 11,
                    "percentage": "36%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития лентиго низкий.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас высокий риск развития лентиго.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "IRF4",
                        "polymorphism": "rs12203592",
                        "chr": "chr6",
                        "position": "396321",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs885479",
                        "chr": "chr16",
                        "position": "89986154",
                        "freq": "76.91",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1110400",
                        "chr": "chr16",
                        "position": "89986130",
                        "freq": "0",
                        "genotype": "AA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805005",
                        "chr": "chr16",
                        "position": "89985844",
                        "freq": "0",
                        "genotype": "CC",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805006",
                        "chr": "chr16",
                        "position": "89985918",
                        "freq": "100",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805007",
                        "chr": "chr16",
                        "position": "89986117",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805008",
                        "chr": "chr16",
                        "position": "89986144",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805009",
                        "chr": "chr16",
                        "position": "89986546",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs2228479",
                        "chr": "chr16",
                        "position": "89985940",
                        "freq": "76.23",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs11547464",
                        "chr": "chr16",
                        "position": "89986091",
                        "freq": "99.48",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs763065230",
                        "chr": "chr16",
                        "position": "89986445",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF04",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Веснушки",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Веснушки, также известные как эфелиды, представляют собой доброкачественные гиперпигментированные пятна с четкими границами, чаще всего появляются на лице, шее, груди и рук. Веснушки являются результатом увеличения производства пигмента меланина в коже. Генетические факторы могут повлиять на развитие веснушек.",
                "analyzed_genes": "RF4, MC1R, intergenic EXOC2 and IRF4, NCOA6, ASIP, TYR",
                "diag_color": "3",
                "analyzed": {
                    "done": 3,
                    "from": 11,
                    "percentage": "27%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития веснушек низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития веснушек.",
                        "selected": 1
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "IRF4",
                        "polymorphism": "rs12203592",
                        "chr": "chr6",
                        "position": "396321",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805005",
                        "chr": "chr16",
                        "position": "89985844",
                        "freq": "0",
                        "genotype": "CC",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs11547464",
                        "chr": "chr16",
                        "position": "89986091",
                        "freq": "99.48",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805007",
                        "chr": "chr16",
                        "position": "89986117",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805008",
                        "chr": "chr16",
                        "position": "89986144",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "MC1R",
                        "polymorphism": "rs1805009",
                        "chr": "chr16",
                        "position": "89986546",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "Intergenic",
                        "polymorphism": "rs1540771",
                        "chr": "chr6",
                        "position": "466033",
                        "freq": "37.05",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ASIP",
                        "polymorphism": "rs4911414",
                        "chr": "chr20",
                        "position": "32729444",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "NCOA6",
                        "polymorphism": "rs4911442",
                        "chr": "chr20",
                        "position": "33355046",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "TYR",
                        "polymorphism": "rs1042602",
                        "chr": "chr11",
                        "position": "88911696",
                        "freq": "37.38",
                        "genotype": "AC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TYR",
                        "polymorphism": "rs1393350",
                        "chr": "chr11",
                        "position": "89011046",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF05",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Целлюлит",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Целлюлит, также известный как эффект апельсиновой корки, представляет собой неровности кожи, которые образуются вследствие неравномерного развития фиброзной ткани и неравномерного отложения подкожной жировой клетчатки. Генетическая предрасположенность, гормональные изменения, пол, этническое происхождения, а также возраст и  изменения веса могут повышают риск развития целлюлита.",
                "analyzed_genes": "ACE, HIF1A",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 2,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития целлюлита низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития целлюлита.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "HIF1A",
                        "polymorphism": "rs11549465",
                        "chr": "chr14",
                        "position": "62207557",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "ACE",
                        "polymorphism": "rs1799752",
                        "chr": "chr17",
                        "position": "61565891",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF06",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Растяжки (стрии)",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Растяжки, также известный как стрии, появляются первоначально как красные или фиолетовые линии на коже, а затем в виде белых или серебряных линий. Растяжки могут появляться в результате механического растяжения кожи: потеря-восстановление веса, ожирение, в результате гормональных изменений во время беременности, кроме того генетические факторы также могут влиять на развитие растяжек.",
                "analyzed_genes": "ELN, SRPX, HMCN1, TMEM18",
                "diag_color": "1",
                "analyzed": {
                    "done": 1,
                    "from": 4,
                    "percentage": "25%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития стрий низкий.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас высокий риск развития стрий.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ELN",
                        "polymorphism": "rs7787362",
                        "chr": "chr7",
                        "position": "73392603",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "HMCN1",
                        "polymorphism": "rs10798036",
                        "chr": "chr1",
                        "position": "186052962",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "SRPX",
                        "polymorphism": "rs35318931",
                        "chr": "chrX",
                        "position": "38009121",
                        "freq": "88.32",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TMEM18",
                        "polymorphism": "rs7594220",
                        "chr": "chr2",
                        "position": "643320",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF07",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Варикозное расширение вен",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Варикоз вен визуально представляет собой темно-фиолетовые и синие вены под кожей ног, которые выглядят как вздутые и переплетенные шнуры под кожей. К факторам риска развития варикозного расширения относятся: возраст, ожирение, стоячее положение и ходьба пешком в вертикальном положении в течение долгого времени, а также гормональные изменения и генетические факторы.",
                "analyzed_genes": "MTHFR",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития варикозного расширения вен низкий.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас возможно развитие варикозного расширения вен.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития варикозного расширения вен.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801131",
                        "chr": "chr1",
                        "position": "11854476",
                        "freq": "22.97",
                        "genotype": "TT",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801133",
                        "chr": "chr1",
                        "position": "11856378",
                        "freq": "51.28",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF08",
                "dis_type": "mono",
                "icd10": "19",
                "status": "final",
                "name": "Экзема (Атопический дерматит)",
                "source": "Кулемин, 2017.",
                "nosology": "Экзема или атопический дерматит (АД), представляет собой хроническое воспалительное заболевание кожи, характеризующееся стойким поражением красного цвета  и острым зудом. Развитию данного заболевания способствуют как генетические так и экологические факторы.",
                "analyzed_genes": "FLG",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 39,
                    "percentage": "5%"
                },
                "recomendations": [
                    {
                        "text": "Недостаточно данных для полного анализа.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас не выявлено потенциальных рисков экземы.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас выявлены потенциальные риски развития экземы. Проконсультируйтесь со специалистом.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас выявлены потенциальные риски развития экземы. Проконсультируйтесь со специалистом.",
                        "selected": 0
                    },
                    {
                        "text": "Произошел какой-то технический сбой, проверьте корректность работы ПО.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FLG",
                        "polymorphism": "rs146466242",
                        "chr": "chr1",
                        "position": "152275298",
                        "nuc_position": "c.12064A>T",
                        "amin_position": "Lys4022Term",
                        "ref": "T",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs150597413",
                        "chr": "chr1",
                        "position": "152277622",
                        "nuc_position": "c.9740C>A",
                        "amin_position": "Ser3247Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51759",
                        "chr": "chr1",
                        "position": "152276477",
                        "nuc_position": "c.10885delC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51725",
                        "chr": "chr1",
                        "position": "152276552",
                        "nuc_position": "c.10810G>T",
                        "amin_position": "Glu3604Term",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs143418984",
                        "chr": "chr1",
                        "position": "152277107",
                        "nuc_position": "c.10255C>T",
                        "amin_position": "Arg3419Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51764",
                        "chr": "chr1",
                        "position": "152278301",
                        "nuc_position": "c.9042_9060dup19",
                        "amin_position": "--",
                        "ref": "D",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51758",
                        "chr": "chr1",
                        "position": "152278969",
                        "nuc_position": "c.8393delA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51721",
                        "chr": "chr1",
                        "position": "152279245",
                        "nuc_position": "c.8117C>G",
                        "amin_position": "Ser2706Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51757",
                        "chr": "chr1",
                        "position": "152279358",
                        "nuc_position": "c.8001_8004delCTCA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs138726443",
                        "chr": "chr1",
                        "position": "152280023",
                        "nuc_position": "c.7339C>T",
                        "amin_position": "Arg2447Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51754",
                        "chr": "chr1",
                        "position": "152280214",
                        "nuc_position": "c.7145_7148delCAGT",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51753",
                        "chr": "chr1",
                        "position": "152280405",
                        "nuc_position": "c.6950_6957delCATCCCAT",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51751",
                        "chr": "chr1",
                        "position": "152280524",
                        "nuc_position": "c.6834_6838delCTCCA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51749",
                        "chr": "chr1",
                        "position": "152281602",
                        "nuc_position": "c.5757_5760delCCAG",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51713",
                        "chr": "chr1",
                        "position": "152281994",
                        "nuc_position": "c.5368C>T",
                        "amin_position": "Gln1790Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51711",
                        "chr": "chr1",
                        "position": "152282129",
                        "nuc_position": "c.5233C>T",
                        "amin_position": "Gln1745Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51747",
                        "chr": "chr1",
                        "position": "152283086",
                        "nuc_position": "c.4275_4276delGT",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51746",
                        "chr": "chr1",
                        "position": "152283090",
                        "nuc_position": "c.4271_4272delAA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51745",
                        "chr": "chr1",
                        "position": "152283336",
                        "nuc_position": "c.4026delT",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51744",
                        "chr": "chr1",
                        "position": "152283357",
                        "nuc_position": "c.4004_4005delAG",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51706",
                        "chr": "chr1",
                        "position": "152283457",
                        "nuc_position": "c.3905C>A",
                        "amin_position": "Ser1302Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs397507563",
                        "chr": "chr1",
                        "position": "152283660",
                        "nuc_position": "c.3702delG",
                        "amin_position": "Ser1235Hisfs",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51742",
                        "chr": "chr1",
                        "position": "152283689",
                        "nuc_position": "c.3673delC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs141375260",
                        "chr": "chr1",
                        "position": "152283944",
                        "nuc_position": "c.3418C>T",
                        "amin_position": "Arg1140Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51703",
                        "chr": "chr1",
                        "position": "152283947",
                        "nuc_position": "c.3415G>T",
                        "amin_position": "Gly1139Term",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs200519781",
                        "chr": "chr1",
                        "position": "152284041",
                        "nuc_position": "c.3321delA",
                        "amin_position": "Gly1109Glufs",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51739",
                        "chr": "chr1",
                        "position": "152284137",
                        "nuc_position": "c.3222_3225delTGAG",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51702",
                        "chr": "chr1",
                        "position": "152284154",
                        "nuc_position": "c.3208C>T",
                        "amin_position": "Gln1070Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51701",
                        "chr": "chr1",
                        "position": "152284243",
                        "nuc_position": "c.3119C>G",
                        "amin_position": "Ser1040Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51737",
                        "chr": "chr1",
                        "position": "152284407",
                        "nuc_position": "c.2955delC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs115746363",
                        "chr": "chr1",
                        "position": "152284886",
                        "nuc_position": "c.2476C>T",
                        "amin_position": "Arg826Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs558269137",
                        "chr": "chr1",
                        "position": "152285077",
                        "nuc_position": "c.2282_2285delCAGT",
                        "amin_position": "Ser761Cysfs",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51735",
                        "chr": "chr1",
                        "position": "152285722",
                        "nuc_position": "c.1640delG",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51734",
                        "chr": "chr1",
                        "position": "152285898",
                        "nuc_position": "c.1464delC",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51696",
                        "chr": "chr1",
                        "position": "152286260",
                        "nuc_position": "c.1102C>T",
                        "amin_position": "Gln368Term",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51695",
                        "chr": "chr1",
                        "position": "152286395",
                        "nuc_position": "c.967G>T",
                        "amin_position": "Gly323Term",
                        "ref": "C",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "mut51733",
                        "chr": "chr1",
                        "position": "152286729",
                        "nuc_position": "c.632_633delAA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs3126085",
                        "chr": "chr1",
                        "position": "152300817",
                        "nuc_position": "--",
                        "amin_position": "--",
                        "ref": "G",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "1"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs6661961",
                        "chr": "chr1",
                        "position": "152442289",
                        "nuc_position": "--",
                        "amin_position": "--",
                        "ref": "T",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "SF09",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Контактный дерматит",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Контактный или профессиональный дерматит является наиболее распространенным, связанным с работой заболеванием кожи. Есть два основных типа контактного дерматита: аллергический  и раздражающий. Развитию данного заболевания способствуют как генетические так и экологические факторы.",
                "analyzed_genes": "FLG",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 2,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития контактного дерматита низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития контактного дерматита.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FLG",
                        "polymorphism": "rs61816761",
                        "chr": "chr1",
                        "position": "152285861",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs558269137",
                        "chr": "chr1",
                        "position": "152285077",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF10",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Псориаз",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Псориаз представляет собой хроническое воспалительное генетическое заболевание, которое в первую очередь влияет на кожу и суставы. Псориаз проявляется в виде покраснения кожи с белыми чешуйками. Генетическая предрасположенность является основной причиной псориаза.",
                "analyzed_genes": "HLA-C, IL12B, IL23R, TNIP1, IL13, TNFAIP3, MTHFR",
                "diag_color": "3",
                "analyzed": {
                    "done": 6,
                    "from": 8,
                    "percentage": "75%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития множественного псориаза низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития множественного псориаза.",
                        "selected": 1
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "HLA-C",
                        "polymorphism": "rs1265181",
                        "chr": "chr6",
                        "position": "31155785",
                        "freq": "64",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "HLA-C",
                        "polymorphism": "rs12191877",
                        "chr": "chr6",
                        "position": "31252925",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "IL12B",
                        "polymorphism": "rs2082412 ",
                        "chr": "chr5",
                        "position": "158717789",
                        "freq": "62.17",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "IL13",
                        "polymorphism": "rs20541",
                        "chr": "chr5",
                        "position": "131995964",
                        "freq": "45.08",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "IL23R",
                        "polymorphism": "rs2201841",
                        "chr": "chr1",
                        "position": "67694202",
                        "freq": "60.84",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801133",
                        "chr": "chr1",
                        "position": "11856378",
                        "freq": "51.28",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TNFAIP3",
                        "polymorphism": "rs610604 ",
                        "chr": "chr6",
                        "position": "138199417",
                        "freq": "0",
                        "genotype": "AC",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "TNIP1",
                        "polymorphism": "rs17728338",
                        "chr": "chr5",
                        "position": "150478318",
                        "freq": "87.39",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF11",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Розацеа",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Розацеа представляет собой длительное заболевание кожи, характеризующееся рецидивами воспаления, покраснением и акне-подобной кожной сыпью на щеках, носу, подбородке, лбу и даже веках. Развитию данного заболевания способствуют как генетические так и экологические факторы.",
                "analyzed_genes": "intergenic HLA-DRA, BTNL2, intergenic PRELID2, KCTD16",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 2,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития розацеа низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития розацеа.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "HLA-DRA",
                        "polymorphism": "rs763035",
                        "chr": "chr6",
                        "position": "32427068",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PRELID2",
                        "polymorphism": "rs111314066",
                        "chr": "chr5",
                        "position": "144469907",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF12",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Ихтиоз",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Сухая кожа или сухость кожи представляет собой огрубение и зуд (иногда болезненный) кожи с мелким шелушением, наличие маленьких трещин, может развиваться во всех возрастных группах. Развитию данного заболевания способствуют как генетические так и экологические факторы.",
                "analyzed_genes": "FLG",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 6,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития ихтиоза низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития ихтиоза.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FLG",
                        "polymorphism": "rs6661961",
                        "chr": "chr1",
                        "position": "152442289",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs138726443",
                        "chr": "chr1",
                        "position": "152280023",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs150597413",
                        "chr": "chr1",
                        "position": "152277622",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs200519781",
                        "chr": "chr1",
                        "position": "152284041",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs397507563",
                        "chr": "chr1",
                        "position": "152283660",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "FLG",
                        "polymorphism": "rs558269137",
                        "chr": "chr1",
                        "position": "152285077",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF13",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Антиоксидантная реакция",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Антиокислительная реакция - это естественная способность нашего организма к детоксикации и противодействию вредным агентам, таким как ультрафиолетовое излучение, загрязнение окружающей среды, а также вырабатываемым самим организмом токсинам. Окислительный стресс происходит в случае ослабления антиоксидантной защиты и является одним из основных факторов старения кожи. Генетический фактор играет серьезную роль в старении кожи, вызванном окислительным стрессом.",
                "analyzed_genes": "SOD2, GPX1, CAT, NQO1",
                "diag_color": "1",
                "analyzed": {
                    "done": 4,
                    "from": 5,
                    "percentage": "80%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития антиоксидантной реакции низкий.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас высокий риск развития антиоксидантной реакции.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "CAT",
                        "polymorphism": "rs1001179 ",
                        "chr": "chr11",
                        "position": "34460231",
                        "freq": "63.35",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "GPX1",
                        "polymorphism": "rs1050450",
                        "chr": "chr3",
                        "position": "49394834",
                        "freq": "0",
                        "genotype": "CC",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "NQO1",
                        "polymorphism": "rs1800566",
                        "chr": "chr16",
                        "position": "69745145",
                        "freq": "58.55",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "NQO1",
                        "polymorphism": "rs2917666",
                        "chr": "chr16",
                        "position": "69763960",
                        "freq": "14.79",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "SOD2",
                        "polymorphism": "rs4880",
                        "chr": "chr6",
                        "position": "160113872",
                        "freq": "49.81",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF14",
                "dis_type": "multi",
                "icd10": "4",
                "status": "final",
                "name": "Защита от гликации",
                "source": "Кулемин, Pathway, 2017.",
                "nosology": "Гликирование имеет место в клетках кожи, при котором происходит химическая сшивка молекул сахара с коллагеном и эластином. Продукты гликозилирования белков могут являться причиной повреждения кожи, старения и воспаления. Генетические факторы могут влиять на уровень гликирования в организме.",
                "analyzed_genes": "GLO1, AGER",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 5,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Риск развития гликации низкий.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас высокий риск развития гликации.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "AGER",
                        "polymorphism": "rs1800624",
                        "chr": "chr6",
                        "position": "32152387",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "AGER",
                        "polymorphism": "rs1800625 ",
                        "chr": "chr6",
                        "position": "32152442",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "AGER",
                        "polymorphism": "rs2070600",
                        "chr": "chr6",
                        "position": "32151443",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "GLO1",
                        "polymorphism": "rs1049346 ",
                        "chr": "chr6",
                        "position": "38670837",
                        "freq": "0",
                        "genotype": "TT",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "GLO1",
                        "polymorphism": "rs1130534",
                        "chr": "chr6",
                        "position": "38650588",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "17",
                "dis_type": "mono",
                "icd10": "19",
                "status": "final",
                "name": "Морщинистая кожа, моногенка",
                "source": "Кулемин, 2017.",
                "nosology": "Описание заболевания",
                "analyzed_genes": "ATP6V0A2",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 2,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Недостаточно данных для полного анализа!",
                        "selected": 1
                    },
                    {
                        "text": "Вы - здоровы!",
                        "selected": 0
                    },
                    {
                        "text": "Вы являетесь носителем!",
                        "selected": 0
                    },
                    {
                        "text": "Вы - больны!",
                        "selected": 0
                    },
                    {
                        "text": "Произошел какой-то технический сбой.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ATP6V0A2",
                        "polymorphism": "rs80356751",
                        "chr": "chr12",
                        "position": "124206996",
                        "nuc_position": "c.294+1G>A",
                        "amin_position": "--",
                        "ref": "G",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "ATP6V0A2",
                        "polymorphism": "rs80356756",
                        "chr": "chr12",
                        "position": "124233326",
                        "nuc_position": "c.1929delA",
                        "amin_position": "--",
                        "ref": "I",
                        "genotype": "--",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF15",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина А",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Недостаток витамина А связан с различными состояниями кожи, включая сухость кожи, ненормальное утолщение кожи, атопический дерматит и замедленное заживление ран.",
                "analyzed_genes": "BCMO1",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 2,
                    "percentage": "50%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный метаболизм витамина А",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А незначительно снижен (~90% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А незначительно снижен (~90% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А снижен (~75% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А существенно снижен (~65% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А существенно снижен (~65% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А нарушен (~50% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А снижен (~75% нормы)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм витамина А снижен (~75% нормы)",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "BCMO1",
                        "polymorphism": "rs7501331",
                        "chr": "chr16",
                        "position": "81314496",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    },
                    {
                        "gene": "BCMO1",
                        "polymorphism": "rs12934922",
                        "chr": "chr16",
                        "position": "81301694",
                        "freq": "15.02",
                        "genotype": "TT",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF16",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина B2",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Дефицит витамина В2 может привести к условиям кожи, включая угловой хейлит (воспаление углов рта) и себорейный дерматит вокруг носа, глаз и ушей.",
                "analyzed_genes": "MTHFR",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный метаболизм витамина B2",
                        "selected": 0
                    },
                    {
                        "text": "Пристутствует дефицит витамина B2. Рекомендуется увеличить потребление.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801133",
                        "chr": "chr1",
                        "position": "11856378",
                        "freq": "51.28",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF17",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина B6",
                "source": "Кулемин, Pathway, 2017 (+PMID 16763894, 24035968, https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/).",
                "nosology": "Дефицит витамина B6 или пиридоксина связано с различными кожными заболеваниями, такими как пеллагра, дерматит, стоматит и себорейный дерматит. Дефицит витамина B6 может также привести к дефициту витамина B3.",
                "analyzed_genes": "NBPF3",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный метаболизм витамина B6",
                        "selected": 1
                    },
                    {
                        "text": "Присутствует дефицит витамина B6",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "NBPF3",
                        "polymorphism": "rs4654748",
                        "chr": "chr1",
                        "position": "21786068",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "SF18",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина B9 (фолиевой кислоты)",
                "source": "Кулемин, Pathway, 2017 (http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3078648/).",
                "nosology": "Дефицит фолиевой кислоты может увеличить риск заболевания кожи, в том числе псориаза, тромбоза глубоких вен,  атрофии полости рта, а также старения кожи.",
                "analyzed_genes": "MTHFR",
                "diag_color": "",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный метаболизм фолиевой кислоты (B9)",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) незначительно снижен. Рекомендуется следить за потреблением.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) существенно замедлен. Рекомендуется увеличить потребление.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) незначительно снижен. Рекомендуется следить за потреблением.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) незначительно снижен. Рекомендуется следить за потреблением.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) существенно замедлен. Рекомендуется увеличить потребление.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) существенно замедлен. Рекомендуется увеличить потребление.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) существенно замедлен. Рекомендуется увеличить потребление.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм фолиевой кислоты (B9) существенно замедлен. Рекомендуется увеличить потребление.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801131",
                        "chr": "chr1",
                        "position": "11854476",
                        "freq": "22.97",
                        "genotype": "TT",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801133",
                        "chr": "chr1",
                        "position": "11856378",
                        "freq": "51.28",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF19",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина B12",
                "source": "Кулемин, Pathway, 2017 (+PMID 19303062).",
                "nosology": "Недостаток витамина В12 связан с различными состояниями кожи, такими как пероральная атрофия и гиперпигментация кожи.",
                "analyzed_genes": "FUT2",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Возможен дефицит витамина B12",
                        "selected": 0
                    },
                    {
                        "text": "Нормальный метаболизм витамина B12",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FUT2",
                        "polymorphism": "rs602662",
                        "chr": "chr19",
                        "position": "49206985",
                        "freq": "18.37",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "SF20",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина C",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Недостаток витамина С приводит к цинге. Кожные проявления цинги включают ненормальное утолщение внешнего слоя кожи, воспаление, замедленное заживление ран, сухость и  огрубение кожи.",
                "analyzed_genes": "SLC23A1",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный метаболизм витамина C.",
                        "selected": 1
                    },
                    {
                        "text": "Присутствует дефицит витамина C. Рекомендуется увеличить потребление.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "SLC23A1",
                        "polymorphism": "rs33972313",
                        "chr": "chr5",
                        "position": "138715502",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "SF21",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина D",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Чрезмерное воздействие УФ (под действием которого синтезируется витамин D) способствует старению кожи, в то время как дефицит витамина D связан с различными условиями кожи, таких как псориаз, атопический дерматит, витилиго и ихтиоза.",
                "analyzed_genes": "CG",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный уровень витамина D. Дополнительного приема не требуется.",
                        "selected": 1
                    },
                    {
                        "text": "Незначительное снижение уровня витамина D. Рекомендуется следить за поступлением этого витамина.",
                        "selected": 0
                    },
                    {
                        "text": "Налюдается дефицит витамина D. Рекомендуется увеличить потребление!",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "CG",
                        "polymorphism": "rs2282679",
                        "chr": "chr4",
                        "position": "72608383",
                        "freq": "0",
                        "genotype": "AC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "SF22",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Дефицит витамина E",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Недостаток витамина Е может привести к повреждению кожи, таким как язвы, повышенный распад коллагена и увеличение морщин.",
                "analyzed_genes": "Intergenic near APOA5",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Достаточный уровень витамина E в плазме крови, дополнительное употребление не требуется.",
                        "selected": 0
                    },
                    {
                        "text": "Замедленный метаболизм. Возможно более низкое количество витамина E в крови, рекомендуется увеличить потребление.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "Intergenic",
                        "polymorphism": "rs12272004",
                        "chr": "chr11",
                        "position": "116603724",
                        "freq": "86.53",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "21",
                "dis_type": "alter",
                "icd10": "3",
                "status": "final",
                "name": "Эффективность рецептора витамина D",
                "source": "Даниленко, Pathway, 2017 (+SNPedia).",
                "nosology": "Эффективность рецептора витамина D",
                "analyzed_genes": "VDR",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Особенностей рецептора витамина D не выявлено, хороший эффект при употреблении бисфосфонатов для улучшения минеральной плотности костей",
                        "selected": 1
                    },
                    {
                        "text": "Ухудшенная эффективность рецептора витамина D, средний эффект при употреблении бисфосфонатов для улучшения минеральной плотности костей, Рекомендуется дополнительное употребление витамина D и кальция.",
                        "selected": 0
                    },
                    {
                        "text": "Ухудшенная эффективность рецептора витамина D, слабый эффект при употреблении бисфосфонатов для улучшения минеральной плотности костей, Рекомендуется дополнительное употребление витамина D и кальция.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "VDR",
                        "polymorphism": "rs731236",
                        "chr": "chr12",
                        "position": "48238757",
                        "freq": "0",
                        "genotype": "TT",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "SF23",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Дефицит жирных кислот Омега-3 и Омега-6",
                "source": "Кулемин, Pathway, 2017 (+SNPedia).",
                "nosology": "Дефицит  омега-3 и омега-6 жирных кислот может привести к различным проблемам кожи, включая дерматит, шелушение, сухость кожи и псориаз.",
                "analyzed_genes": "FADS1",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Нормальный уровень Омега-Жиров, дополнительное употребление не требуется.",
                        "selected": 1
                    },
                    {
                        "text": "Слегка сниженный уровень. Рекомендуется обратить внимание на наличие указанных жиров в пище.",
                        "selected": 0
                    },
                    {
                        "text": "Сильно сниженный уровень Омега3 и Омега6. Рекомендуется увеличить потребление.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FADS1",
                        "polymorphism": "rs174547",
                        "chr": "chr11",
                        "position": "61570783",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "41",
                "dis_type": "multi",
                "icd10": "9",
                "status": "final",
                "name": "Ощущение горького",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Ощущение горького",
                "analyzed_genes": "TAS2R38",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Анализ Вашего генотипа свидетельствует о сниженной чувствительности к горькому вкусу.",
                        "selected": 0
                    },
                    {
                        "text": "У Вас нормальная чувствительность к горькому вкусу.",
                        "selected": 1
                    },
                    {
                        "text": "Анализ Вашего генотипа свидетельствует о повышенной чувствительности к горькому вкусу.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "TAS2R38",
                        "polymorphism": "rs1726866",
                        "chr": "chr7",
                        "position": "141672705",
                        "freq": "49.18",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TAS2R38",
                        "polymorphism": "rs713598",
                        "chr": "chr7",
                        "position": "141673345",
                        "freq": "48.12",
                        "genotype": "CG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "35",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Склонность к перекусываниям",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Склонность к перекусываниям",
                "analyzed_genes": "LEPR",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Постарайтесь не принимать лишний раз пищу, у Вас есть склонность к частым перекусываниям.",
                        "selected": 1
                    },
                    {
                        "text": "Генетической склонности к перекусываниям нет.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "LEPR",
                        "polymorphism": "rs2025804",
                        "chr": "chr1",
                        "position": "65946121",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "36",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Ощущения чувства голода",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Ощущения чувства голода",
                "analyzed_genes": "NMB",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Следите за объемом потребляемой пищи, у Вас более резкое ощущение голода.",
                        "selected": 1
                    },
                    {
                        "text": "У вас типовое ощущение голода.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "NMB",
                        "polymorphism": "rs1051168",
                        "chr": "chr15",
                        "position": "85200520",
                        "freq": "0",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "37",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Переедание при стрессе",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Переедание при стрессе",
                "analyzed_genes": "TAS2R38",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вы не склонны к психогенному перееданию.",
                        "selected": 0
                    },
                    {
                        "text": "Вы склонны к психогенному перееданию, cтарайтесь ограничить питание в стрессовой ситуации.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "TAS2R38",
                        "polymorphism": "rs1726866",
                        "chr": "chr7",
                        "position": "141672705",
                        "freq": "49.18",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "38",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Пищевая мотивация",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Пищевая мотивация",
                "analyzed_genes": "ANKK1",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вы обладаете умеренной мотивацией к добыче пищи.",
                        "selected": 0
                    },
                    {
                        "text": "Вы обладаете повышенной пищевой мотивацией и готовы отложить любые дела для приема пищи.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ANKK1",
                        "polymorphism": "rs1800497",
                        "chr": "chr11",
                        "position": "113270828",
                        "freq": "32.68",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "MET01",
                "dis_type": "multi",
                "icd10": "2",
                "status": "final",
                "name": "Метаболизм кофеина",
                "source": "Кулемин, ФХМ, 2015. (http://snpedia.com/index.php/CYP1A2)",
                "nosology": "Метаболизм кофеина",
                "analyzed_genes": "CYP1A2",
                "diag_color": "6",
                "analyzed": {
                    "done": 1,
                    "from": 8,
                    "percentage": "13%"
                },
                "recomendations": [
                    {
                        "text": "Метаболизм кофеина существенно ускорен.",
                        "selected": 1
                    },
                    {
                        "text": "У Вас нормальный метаболизм кофеина.",
                        "selected": 0
                    },
                    {
                        "text": "Метаболизм кофеина значительно замедлен.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs12720461",
                        "chr": "chr15",
                        "position": "75041351",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs2069514",
                        "chr": "chr15",
                        "position": "75038220",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs2069526",
                        "chr": "chr15",
                        "position": "75041341",
                        "freq": "0",
                        "genotype": "AA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs28399424",
                        "chr": "chr15",
                        "position": "75047169",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs56276455",
                        "chr": "chr15",
                        "position": "75044195",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs72547513",
                        "chr": "chr15",
                        "position": "75042637",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs72547516",
                        "chr": "chr15",
                        "position": "75044578",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "CYP1A2",
                        "polymorphism": "rs762551",
                        "chr": "chr15",
                        "position": "75041917",
                        "freq": "53.09",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "42",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Метаболизм лактозы",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Метаболизм лактозы",
                "analyzed_genes": "MCM6",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "У Вас присутствует склонность к непереносимости лактозы. Будте внимательны при потреблении молока.",
                        "selected": 1
                    },
                    {
                        "text": "Выявленный у Вас генотип не ассоциирован с развитием непереносимости лактозы.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MCM6",
                        "polymorphism": "rs4988235",
                        "chr": "chr2",
                        "position": "136608646",
                        "freq": "0",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "26",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Диета (Литех)",
                "source": "Кулемин, Литех, 2015",
                "nosology": "Диета (Литех)",
                "analyzed_genes": "FABP2, PPARG, ADRB2",
                "diag_color": "",
                "analyzed": {
                    "done": 2,
                    "from": 3,
                    "percentage": "67%"
                },
                "recomendations": [
                    {
                        "text": "Ограничение жиров: Для контроля за весом Вам больше подходит диета с низким употреблением жиров.",
                        "selected": 0
                    },
                    {
                        "text": "Сбалансированная диета:",
                        "selected": 0
                    },
                    {
                        "text": "Ограничение углеводов: Для контроля за весом Вам больше подходит диета с низким употреблением углеводов.",
                        "selected": 0
                    },
                    {
                        "text": "Ограничение углеводов: Для контроля за весом Вам больше подходит диета с низким употреблением углеводов.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FABP2",
                        "polymorphism": "rs1799883",
                        "chr": "chr4",
                        "position": "120241902",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    },
                    {
                        "gene": "PPARG",
                        "polymorphism": "rs1801282",
                        "chr": "chr3",
                        "position": "12393125",
                        "freq": "73.6",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ADRB2",
                        "polymorphism": "rs1042714",
                        "chr": "chr5",
                        "position": "148206473",
                        "freq": "18.5",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "34",
                "dis_type": "multi",
                "icd10": "2",
                "status": "final",
                "name": "Диета на основе мононенасыщеных жиров",
                "source": "Кулемин, Pathway, 2016 (doi: 10.1017/S0007114509289008).",
                "nosology": "Диета на основе мононенасыщеных жиров",
                "analyzed_genes": "ADIPOQ, PPARG",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вам не требуется диета на основе мононенасыщеных жиров.",
                        "selected": 1
                    },
                    {
                        "text": "Вам рекомендуется диета на основе мононенасыщеных жиров.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ADIPOQ",
                        "polymorphism": "rs17300539",
                        "chr": "chr3",
                        "position": "186559460",
                        "freq": "14.35",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "PPARG",
                        "polymorphism": "rs1801282",
                        "chr": "chr3",
                        "position": "12393125",
                        "freq": "73.6",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "34",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Диета на основе полиненасыщеных жиров",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Диета на основе полиненасыщеных жиров",
                "analyzed_genes": "PPARG",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Люди с данными аллелями, соблюдающие диету с большим содержанием полиненасыщенных жиров, нежели насыщенных, как правило, имеют более низкую массу тела по сравнению с теми, кто соблюдает другую диету.",
                        "selected": 0
                    },
                    {
                        "text": "Незначительное снижение веса при диете на основе полиненасыщеных жиров.",
                        "selected": 0
                    },
                    {
                        "text": "Диета полиненасыщеных жиров Вам не подойдет.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "PPARG",
                        "polymorphism": "rs1801282",
                        "chr": "chr3",
                        "position": "12393125",
                        "freq": "73.6",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "36",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Скорость насыщения",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Скорость насыщения",
                "analyzed_genes": "FTO",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Рекомендуется не наедаться досыта, у Вас есть склонность к затрудненному ощущению сытости.",
                        "selected": 0
                    },
                    {
                        "text": "Насыщение приходит вовремя.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FTO",
                        "polymorphism": "rs9939609",
                        "chr": "chr16",
                        "position": "53820527",
                        "freq": "36.7",
                        "genotype": "TT",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "39",
                "dis_type": "alter",
                "icd10": "9",
                "status": "final",
                "name": "Пристрастие к сладкому",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Пристрастие к сладкому",
                "analyzed_genes": "SLC2A2",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вы не склонны к активному употреблению сладкого.",
                        "selected": 0
                    },
                    {
                        "text": "Вы склонны к активному употреблению сладкого, следите за его потреблением!",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "SLC2A2",
                        "polymorphism": "rs5400",
                        "chr": "chr3",
                        "position": "170732300",
                        "freq": "76.11",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "40",
                "dis_type": "alter",
                "icd10": "9",
                "status": "final",
                "name": "Ощущение сладкого",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Ощущение сладкого",
                "analyzed_genes": "TAS1R3",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вы не ощущаете сладкий вкус.",
                        "selected": 0
                    },
                    {
                        "text": "Сниженное ощущение сладкого вкуса.",
                        "selected": 0
                    },
                    {
                        "text": "Нормальное ощущение сладкого.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "TAS1R3",
                        "polymorphism": "rs35744813",
                        "chr": "chr1",
                        "position": "1265460",
                        "freq": "64",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "52",
                "dis_type": "alter",
                "icd10": "1",
                "status": "final",
                "name": "Чувствительность к инсулину после упражнений",
                "source": "Кулемин, Pathway, 2015.",
                "nosology": "Чувствительность к инсулину после упражнений",
                "analyzed_genes": "LIPC",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Чувствительность к инсулину практически не зависит от упражнений.",
                        "selected": 1
                    },
                    {
                        "text": "Чувствительность инсулина сильно повышена после занятий спортом. Вам следует заниматься физическими упражнениями.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "LIPC",
                        "polymorphism": "rs1800588",
                        "chr": "chr15",
                        "position": "58723675",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "51",
                "dis_type": "alter",
                "icd10": "2",
                "status": "final",
                "name": "Уровень ЛВП холестерина после упражнений",
                "source": "Кулемин, Pathway, 2015.",
                "nosology": "Уровень ЛВП холестерина после упражнений",
                "analyzed_genes": "PPARD",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Физические упражнения не влияют на уровни холестерина. Рекомендуются упражнения для тренировки сердечнососудистой системы.",
                        "selected": 1
                    },
                    {
                        "text": "Физические упражнения снижают уровень плохого холестерина. Рекомендуются упражнения на выносливость для тренировки сердечно-сосудистой системы.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "PPARD",
                        "polymorphism": "rs2016520",
                        "chr": "chr6",
                        "position": "35378778",
                        "freq": "0",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "45",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Тендинопатия Ахиллова сухожилия",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Тендинопатия Ахиллова сухожилия",
                "analyzed_genes": "MMP3",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Вероятность тендинопатии в 2,5 раза выше, следите за состоянием сухожилий!",
                        "selected": 1
                    },
                    {
                        "text": "Вероятность тендинопатии типичная.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "MMP3",
                        "polymorphism": "rs679620",
                        "chr": "chr11",
                        "position": "102713620",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "48",
                "dis_type": "multi",
                "icd10": "5",
                "status": "final",
                "name": "Снижение веса от физических упражнений",
                "source": "Кулемин, Pathway, 2015",
                "nosology": "Снижение веса от физических упражнений",
                "analyzed_genes": "FTO, LPL",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Снижение веса от физический упражнений не происходит.",
                        "selected": 1
                    },
                    {
                        "text": "Незначительное снижение веса при физических упражнениях.",
                        "selected": 0
                    },
                    {
                        "text": "Снижение веса при физических упражнениях значительно.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "FTO",
                        "polymorphism": "rs1121980",
                        "chr": "chr16",
                        "position": "53809247",
                        "freq": "31.23",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "LPL",
                        "polymorphism": "rs328",
                        "chr": "chr8",
                        "position": "19819724",
                        "freq": "83.56",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "44",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Аэробная емкость легких",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Аэробная емкость легких",
                "analyzed_genes": "PPARGC1A",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Рекомендуются упраженения на дыхание.",
                        "selected": 0
                    },
                    {
                        "text": "Дополнительных рекомендаций нет.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "PPARGC1A",
                        "polymorphism": "rs8192678",
                        "chr": "chr4",
                        "position": "23815662",
                        "freq": "41.42",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "13",
                "dis_type": "multi",
                "icd10": "5",
                "status": "final",
                "name": "Выносливость",
                "source": "Ильдус, Литех, 2017",
                "nosology": "Усеченная выносливость",
                "analyzed_genes": "AMPD1, PPARA, PPARGC1A, PPARGC1A, UCP2, HIF1A, ADRB2, NOS3, ACE",
                "diag_color": "1",
                "analyzed": {
                    "done": 4,
                    "from": 8,
                    "percentage": "50%"
                },
                "recomendations": [
                    {
                        "text": "Ниже среднего",
                        "selected": 1
                    },
                    {
                        "text": "Средний",
                        "selected": 0
                    },
                    {
                        "text": "Выше среднего",
                        "selected": 0
                    },
                    {
                        "text": "Высокий",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "AMPD1",
                        "polymorphism": "rs17602729",
                        "chr": "chr1",
                        "position": "115236057",
                        "freq": "71.3",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "PPARA",
                        "polymorphism": "rs4253778",
                        "chr": "chr22",
                        "position": "46630634",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARGC1A",
                        "polymorphism": "rs8192678",
                        "chr": "chr4",
                        "position": "23815662",
                        "freq": "41.42",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "UCP2",
                        "polymorphism": "rs660339",
                        "chr": "chr11",
                        "position": "73689104",
                        "freq": "17.19",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "HIF1A",
                        "polymorphism": "rs11549465",
                        "chr": "chr14",
                        "position": "62207557",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "ADRB2",
                        "polymorphism": "rs1042713",
                        "chr": "chr5",
                        "position": "148206440",
                        "freq": "47.92",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "NOS3",
                        "polymorphism": "rs2070744",
                        "chr": "chr7",
                        "position": "150690079",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "ACE",
                        "polymorphism": "rs1799752",
                        "chr": "chr17",
                        "position": "61565891",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "28",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Фитнесс (Литех)",
                "source": "Кулемин, Литех, 2015",
                "nosology": "Фитнесс (Литех)",
                "analyzed_genes": "ADRB3, ADRB2",
                "diag_color": "",
                "analyzed": {
                    "done": 2,
                    "from": 2,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Для контроля за весом Вам необходима регулярная физическая нагрузка умеренной интенсивности, около 3-6 единиц МЕТ* (метаболический эквивалент).",
                        "selected": 0
                    },
                    {
                        "text": "Для контроля за весом Вам необходимы регулярные аэробные физические упражнения повышенной интенсивности, более 6 единиц МЕТ* (метаболический эквивалент).",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ADRB3",
                        "polymorphism": "rs4994",
                        "chr": "chr8",
                        "position": "37823798",
                        "freq": "85.01",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ADRB2",
                        "polymorphism": "rs1042713",
                        "chr": "chr5",
                        "position": "148206440",
                        "freq": "47.92",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "15",
                "dis_type": "multi",
                "icd10": "5",
                "status": "final",
                "name": "Сила",
                "source": "Ильдус, Литех, 2017",
                "nosology": "Усеченная сила",
                "analyzed_genes": "ACTN3, AMPD1, CNTF, IL15RA, L3MBTL4, PPARA, PPARG, MTHFR, VDR, HIF1A",
                "diag_color": "1",
                "analyzed": {
                    "done": 5,
                    "from": 10,
                    "percentage": "50%"
                },
                "recomendations": [
                    {
                        "text": "Ниже среднего",
                        "selected": 1
                    },
                    {
                        "text": "Средний",
                        "selected": 0
                    },
                    {
                        "text": "Выше среднего",
                        "selected": 0
                    },
                    {
                        "text": "Высокий",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ACTN3",
                        "polymorphism": "rs1815739",
                        "chr": "chr11",
                        "position": "66328095",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "AMPD1",
                        "polymorphism": "rs17602729",
                        "chr": "chr1",
                        "position": "115236057",
                        "freq": "71.3",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "CNTF",
                        "polymorphism": "rs1800169",
                        "chr": "chr11",
                        "position": "58391501",
                        "freq": "29.2",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "IL15RA",
                        "polymorphism": "rs2296135",
                        "chr": "chr10",
                        "position": "5994694",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "L3MBTL4",
                        "polymorphism": "rs341173",
                        "chr": "chr18",
                        "position": "6328136",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARA",
                        "polymorphism": "rs4253778",
                        "chr": "chr22",
                        "position": "46630634",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARG",
                        "polymorphism": "rs1801282",
                        "chr": "chr3",
                        "position": "12393125",
                        "freq": "73.6",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "MTHFR",
                        "polymorphism": "rs1801133",
                        "chr": "chr1",
                        "position": "11856378",
                        "freq": "51.28",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "VDR",
                        "polymorphism": "rs1544410",
                        "chr": "chr12",
                        "position": "48239835",
                        "freq": "45.31",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "HIF1A",
                        "polymorphism": "rs11549465",
                        "chr": "chr14",
                        "position": "62207557",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "14",
                "dis_type": "multi",
                "icd10": "5",
                "status": "final",
                "name": "Скорость",
                "source": "Ильдус, Литех, 2017",
                "nosology": "Усеченная скорость",
                "analyzed_genes": "ACTN3, AMPD1, IL15RA, L3MBTL4, PPARA, PPARG, ACE",
                "diag_color": "1",
                "analyzed": {
                    "done": 2,
                    "from": 7,
                    "percentage": "29%"
                },
                "recomendations": [
                    {
                        "text": "Ниже среднего",
                        "selected": 1
                    },
                    {
                        "text": "Средний",
                        "selected": 0
                    },
                    {
                        "text": "Высокий",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ACTN3",
                        "polymorphism": "rs1815739",
                        "chr": "chr11",
                        "position": "66328095",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "AMPD1",
                        "polymorphism": "rs17602729",
                        "chr": "chr1",
                        "position": "115236057",
                        "freq": "71.3",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "IL15RA",
                        "polymorphism": "rs2296135",
                        "chr": "chr10",
                        "position": "5994694",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "L3MBTL4",
                        "polymorphism": "rs341173",
                        "chr": "chr18",
                        "position": "6328136",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARA",
                        "polymorphism": "rs4253778",
                        "chr": "chr22",
                        "position": "46630634",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARG",
                        "polymorphism": "rs1801282",
                        "chr": "chr3",
                        "position": "12393125",
                        "freq": "73.6",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "ACE",
                        "polymorphism": "rs1799752",
                        "chr": "chr17",
                        "position": "61565891",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    }
                ]
            },
            {
                "dis_tag": "44",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Резкое выделение силы",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Резкое выделение силы",
                "analyzed_genes": "ACTN3",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Склонность к резкомы выделению силы. Более высокие результаты в силовых видах спорта.",
                        "selected": 1
                    },
                    {
                        "text": "Требуется больше силовых упражнений для достижения результата.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "ACTN3",
                        "polymorphism": "rs1815739",
                        "chr": "chr11",
                        "position": "66328095",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            },
            {
                "dis_tag": "19",
                "dis_type": "multi",
                "icd10": "5",
                "status": "final",
                "name": "Структура мышечного волокна",
                "source": "Кулемин, ФХМ, 2015. (http://www.ncbi.nlm.nih.gov/pubmed/22645169)",
                "nosology": "Структура мышченого волокна",
                "analyzed_genes": "Мультигенная модель",
                "diag_color": "1",
                "analyzed": {
                    "done": 5,
                    "from": 13,
                    "percentage": "38%"
                },
                "recomendations": [
                    {
                        "text": "Преобладание волокон 2 типа",
                        "selected": 0
                    },
                    {
                        "text": "Соотношение волокон близко к 50/50",
                        "selected": 1
                    },
                    {
                        "text": "Преобладание волокон 1 типа",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "HIF1A",
                        "polymorphism": "rs11549465",
                        "chr": "chr14",
                        "position": "62207557",
                        "freq": "0",
                        "genotype": "GG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "UCP3",
                        "polymorphism": "rs1800849",
                        "chr": "chr11",
                        "position": "73720165",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "ACTN3",
                        "polymorphism": "rs1815739",
                        "chr": "chr11",
                        "position": "66328095",
                        "freq": "0",
                        "genotype": "AG",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "KDR",
                        "polymorphism": "rs1870377",
                        "chr": "chr4",
                        "position": "55972974",
                        "freq": "6.84",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "TFAM",
                        "polymorphism": "rs1937",
                        "chr": "chr10",
                        "position": "60145342",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "VEGFA",
                        "polymorphism": "rs2010963",
                        "chr": "chr6",
                        "position": "43738350",
                        "freq": "44.84",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "PPARD",
                        "polymorphism": "rs2016520",
                        "chr": "chr6",
                        "position": "35378778",
                        "freq": "0",
                        "genotype": "AA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "4"
                    },
                    {
                        "gene": "NFATC4",
                        "polymorphism": "rs2229309",
                        "chr": "chr14",
                        "position": "24839083",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "PPARA",
                        "polymorphism": "rs4253778",
                        "chr": "chr22",
                        "position": "46630634",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "ACE",
                        "polymorphism": "rs1799752",
                        "chr": "chr17",
                        "position": "61565891",
                        "freq": "0",
                        "genotype": "NA",
                        "quality_text": "NA",
                        "quality_line": "No Data",
                        "result": "0"
                    },
                    {
                        "gene": "UCP2",
                        "polymorphism": "rs660339",
                        "chr": "chr11",
                        "position": "73689104",
                        "freq": "17.19",
                        "genotype": "AA",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "PPARGC1B",
                        "polymorphism": "rs7732671",
                        "chr": "chr5",
                        "position": "149212243",
                        "freq": "83.27",
                        "genotype": "GG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    },
                    {
                        "gene": "PPARGC1A",
                        "polymorphism": "rs8192678",
                        "chr": "chr4",
                        "position": "23815662",
                        "freq": "41.42",
                        "genotype": "TC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "43",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Силовые упражнения",
                "source": "Кулемин, Pathway, 2016.",
                "nosology": "Силовые упражнения",
                "analyzed_genes": "MCM6",
                "diag_color": "",
                "analyzed": {
                    "done": 1,
                    "from": 1,
                    "percentage": "100%"
                },
                "recomendations": [
                    {
                        "text": "Вы не набираете вес при силовых упражнениях.",
                        "selected": 0
                    },
                    {
                        "text": "Не рекомендуется профессиональные занятия силовыми упражнениями, возможно увеличение жировой массы.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "INSIG2",
                        "polymorphism": "rs7566605",
                        "chr": "chr2",
                        "position": "118836025",
                        "freq": "44.44",
                        "genotype": "CG",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "5"
                    }
                ]
            },
            {
                "dis_tag": "49",
                "dis_type": "alter",
                "icd10": "5",
                "status": "final",
                "name": "Артериальное давление после физической нагрузки",
                "source": "Кулемин, Pathway, 2015.",
                "nosology": "Артериальное давление после физической нагрузки",
                "analyzed_genes": "EDN1",
                "diag_color": "0",
                "analyzed": {
                    "done": 0,
                    "from": 1,
                    "percentage": "0%"
                },
                "recomendations": [
                    {
                        "text": "Вы не находитесь в группе кардиориска.",
                        "selected": 1
                    },
                    {
                        "text": "Будте осторожны - при резких нагрузках возможно повышение давления! Настоятельно рекомендуется медленно повышать нагрузку воизбежание повышения артериального давления.",
                        "selected": 0
                    }
                ],
                "tested_mutations": [
                    {
                        "gene": "EDN1",
                        "polymorphism": "rs5370",
                        "chr": "chr6",
                        "position": "12296255",
                        "freq": "0",
                        "genotype": "CC",
                        "quality_text": "MEDIUM",
                        "quality_line": "23me_file",
                        "result": "4"
                    }
                ]
            }
        ]
    }
}

export default data;