define([
    'asset/js/moment'
], function(moment){
    alt.factory('Imunisasi', [function(){
        var imunisasi = {
            // judul jadwal imunisasi
            'judul': 'Jadwal Imunisasi Anak Umur 0-18 tahun',

            // sumber jadwal imunisasi
            'sumber': 'Rekomendasi Ikatan Dokter Anak Indonesia (IDAI) tahun 2014',

            // nama vaksin
            'vaksin': {
                'hepatitisb': 'Hepatitis B',
                'polio': 'Polio',
                'bcg': 'BCG',
                'dtp': 'DTP',
                'hib': 'Hib',
                'pcv': 'PCV',
                'rotavirus': 'Rotavirus',
                'influenza': 'Influenza',
                'campak': 'Campak',
                'mmr': 'MMR',
                'tifoid': 'Tifoid',
                'hepatitisa': 'Hepatitis A',
                'varisela': 'Varisela',
                'hpv': 'HPV'
            },

            // keterangan untuk tabel
            'keterangan': {
                'hepatitisb':
                    'Vaksin hepatitis B. Paling baik diberikan dalam waktu 12 jam setelah lahir dan didahului ' +
                    'pemberian suntikan vitamin K1. Bayi lahir dari ibu HBsAg positif, diberikan vaksin hepatitis B ' +
                    'dan imunoglobulin hepatitis B (HBIg) pada ekstremitas yang berbeda. Vaksinasi hepatitis B ' +
                    'selanjutnya dapat menggunakan vaksin hepatitis B monovalen atau vaksin kombinasi.',
                'polio':
                    'Vaksin polio. Pada saat lahir atau pada saat bayi dipulangkan harus diberikan vaksin polio oral ' +
                    '(OPV-0). Selanjutnya, untuk polio-1, polio-2, polio-3 dan polio booster dapat diberikan vaksin ' +
                    'OPV atau IPV, namun sebaiknya paling sedikit mendapat satu dosis vaksin IPV.',
                'bcg':
                    'Vaksin BCG. Pemberian vaksin BCG dianjurkan sebelum 3 bulan, optimal umur 2 bulan. Apabila ' +
                    'diberikan sesudah umur 3 bulan, perlu dilakukan uji tuberkulin.',
                'dtp':
                    'Vaksin DTP. Vaksin DTP pertama diberikan paling cepat pada umur 6 minggu. Dapat diberikan ' +
                    'vaksin DTwP atau DTaP atau kombinasi dengan vaksin lain. Untuk anak umur lebih dari 7 tahun ' +
                    'diberikan vaksin Td, dibooster setiap 10 tahun.',
                'hib':
                    '',
                'pcv':
                    'Vaksin pneumokokus (PCV). Apabila diberikan pada umur 7-12 bulan, PCV diberikan 2 kali ' +
                    'dengan interval 2 bulan; pada umur lebih dari 1 tahun diberikan 1 kali, namun keduanya perlu ' +
                    'booster 1 kali pada umur lebih dari 12 bulan atau minimal 2 bulan setelah dosis terakhir. Pada ' +
                    'anak umur di atas 2 tahun PCV diberikan cukup satu kali.',
                'rotavirus':
                    'Vaksin rotavirus. Vaksin rotavirus monovalen diberikan 2 kali, vaksin rotavirus pentavalen ' +
                    'diberikan 3 kali. Vaksin rotavirus monovalen dosis I diberikan umur 6-14 minggu, dosis ke-2 ' +
                    'diberikan dengan interval minimal 4 minggu. Sebaiknya vaksin rotavirus monovalen selesai ' +
                    'diberikan sebelum umur 16 minggu dan tidak melampaui umur 24 minggu. Vaksin rotavirus ' +
                    'pentavalen : dosis ke-1 diberikan umur 6-14 minggu, interval dosis ke-2 dan ke-3, 4-10 minggu; ' +
                    'dosis ke-3 diberikan pada umur kurang dari 32 minggu (interval minimal 4 minggu).',
                'influenza':
                    'Vaksin influenza. Vaksin influenza diberikan pada umur minimal 6 bulan, diulang setiap tahun. ' +
                    'Untuk imunisasi pertama kali (primary immunization) pada anak umur kurang dari 9 tahun ' +
                    'diberi dua kali dengan interval minimal 4 minggu. Untuk anak 6 - < 36 bulan, dosis 0,25 mL.',
                'campak':
                    'Vaksin campak. Vaksin campak kedua tidak perlu diberikan pada umur 24 bulan, apabila MMR ' +
                    'sudah diberikan pada 15 bulan.',
                'mmr':
                    '',
                'tifoid':
                    '',
                'hepatitisa':
                    '',
                'varisela':
                    'Vaksin varisela. Vaksin varisela dapat diberikan setelah umur 12 bulan, terbaik pada umur ' +
                    'sebelum masuk sekolah dasar. Apabila diberikan pada umur lebih dari 12 tahun, perlu 2 dosis ' +
                    'dengan interval minimal 4 minggu.',
                'hpv':
                    'Vaksin human papiloma virus (HPV). Vaksin HPV dapat diberikan mulai umur 10 tahun. Vaksin ' +
                    'HPV bivalen diberikan tiga kali dengan interval 0, 1, 6 bulan; vaksin HPV tetravalen dengan ' +
                    'interval 0,2,6 bulan.'
            },

            // membuat jadwal imunisasi berdasarkan tanggal lahir
            'jadwal': function(tgllahir){
                var res = {
                    'hepatitisb': [{
                        'keterangan': 'Paling baik diberikan dalam waktu 12 jam setelah lahir dan didahului pemberian suntukan vitamin K1.',
                        'tglawal': moment(tgllahir),
                        'tglakhir': moment(tgllahir).add('12', 'hours')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('1', 'months'),
                        'tglakhir': moment(tgllahir).add('2', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }],

                    'polio': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir),
                        'tglakhir': moment(tgllahir).add('1', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'months'),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('4', 'months'),
                        'tglakhir': moment(tgllahir).add('5', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('18', 'months'),
                        'tglakhir': moment(tgllahir).add('25', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('5', 'years'),
                        'tglakhir': moment(tgllahir).add('6', 'years').subtract('1', 'days')
                    }],

                    'bcg': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }],

                    'dtp': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'months'),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('4', 'months'),
                        'tglakhir': moment(tgllahir).add('5', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('18', 'months'),
                        'tglakhir': moment(tgllahir).add('25', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('5', 'years'),
                        'tglakhir': moment(tgllahir).add('6', 'years').subtract('1', 'days')
                    }, {
                        'keterangan': 'Vaksin Td',
                        'tglawal': moment(tgllahir).add('10', 'years'),
                        'tglakhir': moment(tgllahir).add('13', 'years').subtract('1', 'days')
                    }, {
                        'keterangan': 'Vaksin Td',
                        'tglawal': moment(tgllahir).add('18', 'years'),
                        'tglakhir': moment(tgllahir).add('19', 'years').subtract('1', 'days')
                    }],

                    'hib': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'months'),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('4', 'months'),
                        'tglakhir': moment(tgllahir).add('5', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('15', 'months'),
                        'tglakhir': moment(tgllahir).add('19', 'months').subtract('1', 'days')
                    }],

                    'pcv': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'months'),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('4', 'months'),
                        'tglakhir': moment(tgllahir).add('5', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('12', 'months'),
                        'tglakhir': moment(tgllahir).add('16', 'months').subtract('1', 'days')
                    }],

                    'rotavirus': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'months'),
                        'tglakhir': moment(tgllahir).add('3', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('4', 'months'),
                        'tglakhir': moment(tgllahir).add('5', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('7', 'months').subtract('1', 'days')
                    }],

                    'influenza': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('6', 'months')
                    }],

                    'campak': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('9', 'months'),
                        'tglakhir': moment(tgllahir).add('10', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': 'Tidak perlu diberikan apabila MMR sudah diberikan pada 15 bulan',
                        'tglawal': moment(tgllahir).add('24', 'months'),
                        'tglakhir': moment(tgllahir).add('25', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'years'),
                        'tglakhir': moment(tgllahir).add('7', 'years').subtract('1', 'days')
                    }],

                    'mmr': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('15', 'months'),
                        'tglakhir': moment(tgllahir).add('16', 'months').subtract('1', 'days')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('5', 'years'),
                        'tglakhir': moment(tgllahir).add('6', 'years').subtract('1', 'days')
                    }],

                    'tifoid': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('3', 'years'),
                        'tglakhir': moment(tgllahir).add('3', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('6', 'years'),
                        'tglakhir': moment(tgllahir).add('6', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('9', 'years'),
                        'tglakhir': moment(tgllahir).add('9', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('12', 'years'),
                        'tglakhir': moment(tgllahir).add('12', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('15', 'years'),
                        'tglakhir': moment(tgllahir).add('15', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('18', 'years'),
                        'tglakhir': moment(tgllahir).add('18', 'years')
                    }],

                    'hepatitisa': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'years'),
                        'tglakhir': moment(tgllahir).add('2', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('2', 'years').add('6', 'months'),
                        'tglakhir': moment(tgllahir).add('2', 'years').add('6', 'months')
                    }],

                    'varisela': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('12', 'months'),
                        'tglakhir': moment(tgllahir).add('19', 'years').subtract('1', 'days')
                    }],

                    'hpv': [{
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('10', 'years'),
                        'tglakhir': moment(tgllahir).add('10', 'years')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('10', 'years').add('1', 'month'),
                        'tglakhir': moment(tgllahir).add('10', 'years').add('1', 'months')
                    }, {
                        'keterangan': '',
                        'tglawal': moment(tgllahir).add('10', 'years').add('6', 'month'),
                        'tglakhir': moment(tgllahir).add('10', 'years').add('6', 'months')
                    }]
                };

                for(var i=3; i<18; i++){
                    res.influenza.push({
                        'keterangan': '',
                        'tglawal': moment(res.influenza[res.influenza.length].tglawal).add('1', 'years'),
                        'tglakhir': moment(res.influenza[res.influenza.length].tglawal).add('1', 'years')
                    });
                }

                return res;
            }
        };

        return imunisasi;
    }]);
});