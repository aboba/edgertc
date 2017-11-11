var respecConfig = {
    "specStatus": "CG-DRAFT",
    "shortName":  "ms-ortc",
    "publishDate": "2017-11-09",
    "editors": [
        {   "name":       "Microsoft Corporation",
            "company":    "Microsoft",
            "companyURL": "https://www.microsoft.com/" }
    ],
    "authors": [
    ],
    "wg":           "Microsoft Corporation",
    "wgPatentURI":  "",
    "issueBase": "https://github.com/aboba/edgertc/issues",
    "otherLinks": [
      {
        "key": "Participate",
        "data": [
        {
          "value": "Browse open issues",
          "href": "https://github.com/aboba/edgertc/issues"
        }]
      }],
    "localBiblio":  {
    "IANA-RTP-2": {
      "title": "RTP Payload Format media types",
      "href": "https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2",
      "publisher": "IANA"
    },
    "IANA-RTP-10": {
      "title": "RTP Compact Header Extensions",
      "href": "https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-10",
      "publisher": "IANA"
    },
    "IANA-SDP-14": {
      "title": "'rtcp-fb' Attribute Values",
      "href": "https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-14",
      "publisher": "IANA"
    },
    "IANA-SDP-15": {
      "title": "'ack' and 'nack' Attribute Values",
      "href": "https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-15",
      "publisher": "IANA"
    },
    "IANA-SDP-19": {
      "title": "Codec Control Messages",
      "href": "https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-19",
      "publisher": "IANA"
    },
    "IANA-STUN-6": {
      "title": "STUN Error Codes",
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA"
    },
    "MMUSIC-RID": {
      "title": "RTP Payload Format Constraints",
      "href": "https://tools.ietf.org/html/draft-ietf-mmusic-rid",
      "authors": [
        "P. Thatcher",
        "M. Zanaty",
        "S. Nandakumar",
        "B. Burman",
        "A. Roach",
        "B. Campen"
      ],
      "status": "13 March 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RID": {
      "title": "RTP Stream Identifier Source Description (SDES)",
      "href": "https://tools.ietf.org/html/draft-ietf-avtext-rid",
      "authors": [
        "A. Roach",
        "S. Nandakumar",
        "P. Thatcher"
      ],
      "status": "06 October 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RFC3264": {
      "title": "An Offer/Answer Model with the Session Description Protocol",
      "href": "https://tools.ietf.org/html/rfc3264",
      "authors": [
        "J. Rosenberg",
        "H. Schulzrinne"
      ],
      "status": "July 2002. RFC",
      "publisher": "IETF"
    },
    "RFC3890": {
      "title": "A Transport Independent Bandwidth Modifier for the Session Description Protocol (SDP)",
      "href": "https://tools.ietf.org/html/rfc3890",
      "authors": [
        "M. Westerlund"
      ],
      "status": "September 2004. RFC",
      "publisher": "IETF"
    },
    "RFC4585": {
      "title": "Extended RTP Profile for RTCP-Based Feedback (RTP/AVPF)",
      "href": "https://tools.ietf.org/html/rfc4585",
      "authors": [
        "J. Ott",
        "S. Wenger",
        "N. Sato",
        "C. Burmeister",
        "J. Rey"
      ],
      "status": "July 2006. RFC",
      "publisher": "IETF"
    },
    "RFC4733": {
      "title": "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals",
      "href": "https://tools.ietf.org/html/rfc4733",
      "authors": [
        "H. Schulzrinne",
        "T. Taylor"
      ],
      "status": "December 2006. RFC",
      "publisher": "IETF"
    },
    "RFC4961": {
      "title": "Symmetric RTP/RTC Control Protocol (RTCP)",
      "href": "https://tools.ietf.org/html/rfc4961",
      "authors": [
        "D. Wing"
      ],
      "status": "July 2007. RFC",
      "publisher": "IETF"
    },
    "RFC5104": {
      "title": "Codec Control Messages in the RTP Audio-Visual Profile with Feedback (AVPF)",
      "href": "https://tools.ietf.org/html/rfc5104",
      "authors": [
        "S. Wenger",
        "U. Chandra",
        "M. Westerlund",
        "B. Burman"
      ],
      "status": "February 2008. RFC",
      "publisher": "IETF"
    },
    "RFC5124": {
      "title": "Extended Secure RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/SAVPF)",
      "href": "https://tools.ietf.org/html/rfc5124",
      "authors": [
        "J. Ott",
        "E. Carrara"
      ],
      "status": "February 2008. RFC",
      "publisher": "IETF"
    },
    "RFC5285": {
      "title": "A General Mechanism for RTP Header Extensions",
      "href": "https://tools.ietf.org/html/rfc5285",
      "authors": [
        "D. Singer",
        "H. Desineni"
      ],
      "status": "July 2008. RFC",
      "publisher": "IETF"
    },
    "RFC5450": {
      "title": "Transmission Time Offsets in RTP Streams",
      "href": "https://tools.ietf.org/html/rfc5450",
      "authors": [
        "D. Singer",
        "H. Desineni"
      ],
      "status": "March 2009. RFC",
      "publisher": "IETF"
    },
    "RFC5506": {
      "title": "Support for Reduced-Size Real-Time Transport Control Protocol (RTCP): Opportunities and Consequences",
      "href": "https://tools.ietf.org/html/rfc5506",
      "authors": [
        "I. Johansson",
        "M. Westerlund"
      ],
      "status": "April 2009. RFC",
      "publisher": "IETF"
    },
    "RFC5583": {
      "title": "Signaling Media Decoding Dependency in the SDP",
      "href": "https://tools.ietf.org/html/rfc5583",
      "authors": [
        "T. Schierl",
        "S. Wenger"
      ],
      "status": "July 2009. RFC",
      "publisher": "IETF"
    },
    "RFC5761": {
      "title": "Multiplexing RTP Data and Control Packets on a Single Port",
      "href": "https://tools.ietf.org/html/rfc5761",
      "authors": [
        "C. Perkins",
        "M. Westerlund"
      ],
      "status": "April 2010. RFC",
      "publisher": "IETF"
    },
    "RFC5764": {
      "title": "Datagram Transport Layer Security (DTLS) Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)",
      "href": "https://tools.ietf.org/html/rfc5764",
      "authors": [
        "D. McGrew",
        "E. Rescorla"
      ],
      "status": "May 2010. RFC",
      "publisher": "IETF"
    },
    "RFC6051": {
      "title": "Rapid Synchronisation of RTP Flows",
      "href": "https://tools.ietf.org/html/rfc6051",
      "authors": [
        "C. Perkins",
        "T. Schierl"
      ],
      "status": "November 2010. RFC",
      "publisher": "IETF"
    },
    "RFC6184": {
      "title": "RTP Payload Format for H.264 Video",
      "href": "https://tools.ietf.org/html/rfc6184",
      "authors": [
        "Y.-K.. Wang",
        "R. Even",
        "T. Kristensen",
        "R. Jesup"
      ],
      "status": "May 2011. RFC",
      "publisher": "IETF"
    },
    "RFC6190": {
      "title": "RTP Payload Format for Scalable Video Coding",
      "href": "https://tools.ietf.org/html/rfc6190",
      "authors": [
        "S. Wenger",
        "Y.-K. Wang",
        "T. Schierl",
        "A. Eleftheriadis"
      ],
      "status": "May 2011. RFC",
      "publisher": "IETF"
    },
    "RFC6464": {
      "title": "A Real-time Transport Protocol (RTP) Header Extension for Client-to-Mixer Audio Level Indication",
      "href": "https://tools.ietf.org/html/rfc6464",
      "authors": [
        "J. Lennox, Ed.",
        "E. Ivov",
        "E. Marocco"
      ],
      "status": "December 2011. RFC",
      "publisher": "IETF"
    },
    "RFC6465": {
      "title": "A Real-time Protocol (RTP) Header Extension for Mixer-to-Client Audio Level Indication",
      "href": "https://tools.ietf.org/html/rfc6465",
      "authors": [
        "E. Ivov",
        "E. Marocco",
        "J. Lennox"
      ],
      "status": "December 2011. RFC",
      "publisher": "IETF"
    },
    "RFC6455": {
      "title": "The WebSocket Protocol",
      "href": "https://tools.ietf.org/html/rfc6455",
      "authors": [
        "I. Fette",
        "A. Melnikov"
      ],
      "status": "December 2011. RFC",
      "publisher": "IETF"
    },
    "RFC6544": {
      "title": "TCP Candidates with Interactive Connectivity Establishment (ICE)",
      "href": "https://tools.ietf.org/html/rfc6544",
      "authors": [
        "J. Rosenberg",
        "A. Keranen",
        "B. B. Lowekamp",
        "A. B. Roach"
      ],
      "status": "March 2012. RFC",
      "publisher": "IETF"
    },
    "RFC6716": {
      "title": "Definition of the Opus Audio Codec",
      "href": "https://tools.ietf.org/html/rfc6716",
      "authors": [
        "JM. Valin",
        "K. Vos",
        "T. Terriberry"
      ],
      "status": "September 2012. RFC",
      "publisher": "IETF"
    },
    "RFC6904": {
      "title": "Encryption of Header Extensions in the SRTP",
      "href": "https://tools.ietf.org/html/rfc6904",
      "authors": [
        "J. Lennox"
      ],
      "status": "April 2013. RFC",
      "publisher": "IETF"
    },
    "RFC7022": {
      "title": "Guidelines for Choosing RTP Control Protocol (RTCP) Canonical Names (CNAMEs)",
      "href": "https://tools.ietf.org/html/rfc7022",
      "authors": [
        "A. Begen",
        "C. Perkins",
        "D. Wing",
        "E. Rescorla"
      ],
      "status": "September 2013. RFC",
      "publisher": "IETF"
    },
    "RFC7064": {
      "title": "URI Scheme for Session Traversal Utilities for NAT (STUN) Protocol",
      "href": "https://tools.ietf.org/html/rfc7064",
      "authors": [
        "S. Nandakumar",
        "G. Salgueiro",
        "P. Jones",
        "M. Petit-Huguenin"
      ],
      "status": "November 2013. RFC",
      "publisher": "IETF"
    },
    "RFC7065": {
      "title": "Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers",
      "href": "https://tools.ietf.org/html/rfc7065",
      "authors": [
        "M. Petit-Huguenin",
        "S. Nandakumar",
        "G. Salgueiro",
        "P. Jones"
      ],
      "status": "November 2013. RFC",
      "publisher": "IETF"
    },
    "RFC7587": {
      "title": "RTP Payload Format for Opus Speech and Audio Codec",
      "href": "https://tools.ietf.org/html/rfc7587",
      "authors": [
        "J. Spittka",
        "K. Vos",
        "JM. Valin"
      ],
      "status": "June 2015. RFC", 
      "publisher": "IETF"
    },
    "RFC7635": {
      "title": "Session Traversal Utlities for NAT (STUN) Extension for Third Party Authorization",
      "href": "https://tools.ietf.org/html/rfc7635",
      "authors": [
        "T. Reddy",
        "P. Patil",
        "R. Ravindranath",
        "J. Uberti"
      ],
      "status": "August 2015. RFC",
      "publisher": "IETF"
    },
    "RFC7656": {
      "title": "RTP Grouping Taxonomy",
      "href": "https://tools.ietf.org/html/rfc7656",
      "authors": [
        "J. Lennox",
        "K. Gross",
        "S. Nandakumar",
        "G. Salgueiro",
        "B. Burman"
      ],
      "status": "November 2015. RFC",
      "publisher": "IETF"
    },
    "RFC7675": {
      "title": "Session Traversal Utilities for NAT (STUN) Usage for Consent Freshness",
      "href": "https://tools.ietf.org/html/rfc7675",
      "authors": [
        "M. Perumal",
        "D. Wing",
        "R. Ravindranath",
        "T. Reddy",
        "M. Thomson"
      ],
      "status": "October 2015. RFC",
      "publisher": "IETF"
    },
    "RFC7741": {
      "title": "RTP Payload Format for VP8 Video",
      "href": "https://tools.ietf.org/html/rfc7741",
      "authors": [
        "P. Westin",
        "H. Lundin",
        "M. Glover",
        "J. Uberti",
        "F. Galligan"
      ],
      "status": "March 2016. RFC",
      "publisher": "IETF"
    },
    "RFC7742": {
      "title": "WebRTC Video Processing and Codec Requirements",
      "href": "https://tools.ietf.org/html/rfc7742",
      "authors": [
        "A.B. Roach"
      ],
      "status": "March 2016. RFC",
      "publisher": "IETF"
    },
    "RFC7874": {
      "title": "WebRTC Audio Codec and Processing Requirements",
      "href": "https://tools.ietf.org/html/rfc7874",
      "authors": [
        "JM. Valin",
        "C. Bran"
      ],
      "status": "May 2016. RFC",
      "publisher": "IETF"
    },
    "RFC7983": {
      "title": "Multiplexing Scheme Updates for Secure Real-time Transport Protocol (SRTP) Extension for Datagram Transport Layer Security (DTLS)",
      "href": "https://tools.ietf.org/html/rfc7983",
      "authors": [
        "M. Petit-Huguenin",
        "G. Salgueiro"
      ],
      "status": "September 2016. RFC",
      "publisher": "IETF"
    },
    "ABS-SEND-TIME": {
      "title": "Absolute Send Time extension",
      "href": "https://webrtc.org/experiments/rtp-hdrext/abs-send-time/",
      "authors": [
        "F. Solenberg"
      ],
      "status": "",
      "publisher": "Google"
    },
    "BUNDLE": {
      "title": "Negotiating Media Multiplexing Using the Session Description Protocol (SDP)",
      "href": "https://tools.ietf.org/html/draft-ietf-mmusic-sdp-bundle-negotiation",
      "authors": [
        "C. Holmberg",
        "H. Alvestrand",
        "C. Jennings"
      ],
      "status": "12 April 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "DATA": {
      "title": "WebRTC Data Channels",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-data-channel",
      "authors": [
        "R. Jesup",
        "S. Loreto",
        "M. Tuexen"
      ],
      "status": "04 January 2015. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "DATA-PROT": {
      "title": "WebRTC Data Channel Establishment Protocol",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-data-protocol",
      "authors": [
        "R. Jesup",
        "S. Loreto",
        "M. Tuexen"
      ],
      "status": "04 January 2015. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "FEC": {
      "title": "WebRTC Forward Error Correction Requirements",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-fec",
      "authors": [
        "J. Uberti"
      ],
      "status": "31 October 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "FLEXFEC": {
      "title": "RTP Payload Format for Flexible Forward Error Correction (FEC)",
      "href": "https://tools.ietf.org/html/draft-ietf-payload-flexible-fec-scheme",
      "authors": [
        "V. Singh",
        "A. Begen",
        "M. Zanaty",
        "G. Mandyam" 
      ],
      "status": "31 October 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "JSEP": {
      "title": "Javascript Session Establishment Protocol",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-jsep",
      "authors": [
        "J. Uberti",
        "C. Jennings",
        "E. Rescorla"
      ],
      "status": "29 March 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "MS-AUDIO-EVENTS": {
        title:    "Audio Session Events - DisconnectReason"
    ,   href:     "https://msdn.microsoft.com/en-us/library/windows/desktop/dd370797(v=vs.85).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "09 November 2017."
    ,   publisher:  "Microsoft"
    },
    "MS-DTMF": {
        title:    "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/cc431502(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-H264PF": {
        title:    "RTP Payload Format for H.264 Video Streams Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/hh659565(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-ICE": {
        title:    "Interactive Connectivity Establishment (ICE) Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/Cc431495(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-ICE2": {
        title:    "Interactive Connectivity Establishment (ICE) Extensions 2.0"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/cc431504(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-QoE": {
        title:    "Quality of Experience Monitoring Server Protocol"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/cc431512(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "14 September 2016."
    ,   publisher:  "Microsoft"
    },
    "MS-ICE": {
        title:    "[MS-ICE]: Interactive Connectivity Establish (ICE) Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/dd922095%28v=office.12%29.aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 October 2014."
    ,   publisher:  "Microsoft"
    },
    "MS-RTP": {
        title:    "Real-time Transport Protocol (RTP) Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/cc431492(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-RTPRADEX": {
        title:    "RTP Payload for Redundant Audio Data Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/office/cc431513(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-SDPEXT": {
        title:    "Session Description Protocol (SDP) Version 2.0 Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/cc431514(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "MS-TURN": {
        title:    "Traversal Using Relay NAT (TURN) Extensions"
    ,   href:     "https://msdn.microsoft.com/en-us/library/cc431507(v=office.12).aspx"
    ,   authors:  [
            "Microsoft"
        ]
    ,   status:   "30 March 2015."
    ,   publisher:  "Microsoft"
    },
    "REMB": {
      "title": "RTCP message for Receiver Estimated Maximum Bitrate",
      "href": "https://tools.ietf.org/html/draft-alvestrand-rmcat-remb",
      "authors": [
        "H. Alvestrand"
      ],
      "status": "21 October 2013. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTCWEB-SECURITY": {
      "title": "Security Considerations for WebRTC",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-security",
      "authors": [
        "E. Rescorla"
      ],
      "status": "26 February 2015. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTCWEB-SECURITY-ARCH": {
      "title": "WebRTC Security Architecture",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-security-arch",
      "authors": [
        "E. Rescorla"
      ],
      "status": "08 June 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTP-MULTI-STREAM": {
      "title": "Sending Multiple Types of Media in a Single RTP Session",
      "href": "https://tools.ietf.org/html/draft-ietf-avtcore-multi-media-rtp-session",
      "authors": [
        "M. Westerlund",
        "C. Perkins",
        "J. Lennox"
      ],
      "status": "18 December 2015. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTP-USAGE": {
      "title": "Web Real-Time Communication (WebRTC): Media Transport and Use of RTP",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-rtp-usage",
      "authors": [
        "C. Perkins",
        "M. Westerlund",
        "J. Ott"
      ],
      "status": "17 March 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RFC5245bis": {
      "title": "Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal",
      "href": "https://tools.ietf.org/html/draft-ietf-ice-rfc5245bis",
      "authors": [
        "A. Keranen",
        "C. Holmberg",
        "J. Rosenberg"
      ],
      "status": "20 April 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "SILK": {
        title:    "SILK Speech Codec"
    ,   href:     "https://tools.ietf.org/html/draft-vos-silk"
    ,   authors:  [
            "K. Vos"
        ,   "S. Jensen"
        ,   "K. Soerensen"
        ]
    ,   status:   "8 March 2010. Internet Draft (work in progress)"
    ,   publisher:  "IETF"
    },
    "STUN-PARAMETERS": {
      "authors":["IETF"],
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA",
      "status": "IANA Parameter Assignment",
      "title": "STUN Error Codes",
      "date": "April 2011"
    },
    "TRANSPORT-CC": {
      "title": "RTP Extensions for Transport-wide Congestion Control",
      "href": "https://tools.ietf.org/html/draft-holmer-rmcat-transport-wide-cc-extensions",
      "authors": [
        "S. Holmer",
        "M. Flodman",
        "E. Sprang"
      ],
      "status": "19 October 2015. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "TRICKLE": {
      "title": "Trickle ICE: Incremental Provisioning of Candidates for the Interactive Connectivity Establishment (ICE) Protocol",
      "href": "https://tools.ietf.org/html/draft-ietf-ice-trickle",
      "authors": [
        "E. Ivov",
        "E. Rescorla",
        "J. Uberti",
        "P. Saint-Andre"
      ],
      "status": "08 September 2016. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "TS26.114": {
      "title": "3rd Generation Partnership Project; Technical Specification Group Services and System Aspects; IP Multimedia Subsystem (IMS); Multimedia Telephony; Media handling and interaction (Release 12)",
      "href": "http://www.3gpp.org/DynaReport/26114.htm",
      "authors": [
        "3GPP TS 26.114 V12.8.0"
      ],
      "status": "December 2014",
      "publisher": "3GPP"
    },
    "WEBRTC-STATS": {
      "title": "Identifiers for WebRTC's Statistics API",
      "href": "https://w3c.github.io/webrtc-stats/",
      "authors": [
        "Harald Alvestrand",
        "Varun Singh"
      ],
      "status": "31 March 2017 (work in progress)",
      "publisher": "W3C"
    }
  }
}
