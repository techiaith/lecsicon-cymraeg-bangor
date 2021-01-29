# Lecsicon Cymraeg Bangor

[English text below](#the-bangor-welsh-lexicon)

Dyma ryddhau lecsicon cynhwysfawr o eirffurfiau Cymraeg, eu lemâu (=ffurfiau cysefin) cyfatebol, eu rhannau ymadrodd a'u nodweddion morffolegol yn rhydd o dan drwydded CC0 yn y gobaith y bydd yn sbarduno datblygiad technolegau iaith Cymraeg.

Ffynhonnell y data yw'r lecsicon Cymraeg a luniwyd i'w ddefnyddio o fewn Cysill, y gwirydd sillafu a gramadeg Cymraeg poblogaidd a grewyd ym Mhrifysgol Bangor. Wrth ei rhyddhau, rydym wedi trosi'r data o fformat cymhleth a chynnil a luniwyd i ymdopi â chyfyngiadau cof cyfrifiaduron y 90au i fformat llawnach sy'n fwy hylaw ac yn haws ei darllen.

Mae'r ffeil wedi'i threfnu gydag un geirffurf i bob llinell, ynghyd â'r lemma, y rhan ymadrodd, a'r nodweddion morffolegol.

## Enghreifftiau o'r data

Dyma enghraifft o'r data:

```
alwad	galwad	NOUN	Gender=Fem,Masc|Mutation=SM
alwadau	galwad	NOUN	Mutation=SM|Number=Plur
galwad	galwad	NOUN	Gender=Fem,Masc
galwadau	galwad	NOUN	Number=Plur
ngalwad	galwad	NOUN	Gender=Fem,Masc|Mutation=NM
ngalwadau	galwad	NOUN	Mutation=NM|Number=Plur
Galway	Galway	PROPN	NameType=Geo
alwedig	galwedig	ADJ	Degree=Pos|Mutation=SM
galwedig	galwedig	ADJ	Degree=Pos
ngalwedig	galwedig	ADJ	Degree=Pos|Mutation=NM
```

# Manylion y tagiau 

Gan fod y set o dagiau rhannau ymadrodd a ddefnyddir gan Cysill yn benodol ar gyfer anghenion y rhaglen honno, troswyd y data i ddefnyddio tagiau rhan ymadrodd a nodweddion cyfoes yn seiliedig ar yr hyn a ddefnyddir gan fframwaith rhyngwladol Universal Dependencies (http://universaldependencies.org) [^troednodyn]. Ceir crynodeb o'r tagiau yn X a chrynodeb o'r nodweddion morffolegol yn Y. Mantais defnyddio'r tagiau a nodweddion hyn yw bod y data bellach yn defnyddio set gyffredinol, gydnabyddedig o dagiau a nodweddion sy'n annibynol o iaith benodol ac yn debyg o fod yn gyfarwydd i ddatblygwyr sy'n gweithio ar NLP o fewn amgylchedd amlieithog.

## Rhestr y Tagiau a'r Nodweddion Morffolegol a ddefnyddiwyd

Dyma'r tagiau a'r nodweddion a ddefnyddir yn y data:

```
ADJ
  Degree
    Cmp
    Equ
    Pos
    Sup
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
  Numform
    Word
  Numtype
    Ord
  Position
    Prenom

ADP
  -
    -
  AdpType
    Prep
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    1
    2
    3
  Style
    Coll
    Form

ADV
  -
    -
  Mutation
    AM
    NM
    SM

AUX

CCONJ

CONJ
  -
    -
  Mutation
    AM
    SM

DET
  -
    -
  Definite
    Def
  Mutation
    AM
    HM
    NM
    SM
  PronType
    Art

INTJ
  -
    -

NOUN
  -
    -
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Coll
    Plur
    Sing

NUM
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Numform
    Word
  Numtype
    Card

PART
  -
    -
  PronType
    Neg

PRON
  -
    -
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    1
    2
    3
  Polite
    Form
    Inf
  Poss
    Yes
  PronGender
    Masc
  PronType
    Dem
    Int
    Prs
    Rel
  Style
    Arch
    Coll
    Form

PROPN
  Mutation
    AM
    HM
    NM
    SM
  NameType
    Geo
    Prs

PUNCT

SCONJ

SYM

VERB
  -
    -
  Mood
    Imp
    Ind
    Sub
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    0
    1
    2
    3
  Relative
    Rel
  Style
    Arch
    Coll
    Form
  Tense
    Fut
    Imp
    Past
    Pqp
    Pres

X
```

Noder na cheir enghreifftiau o SYM, PUNCT ac X yn y data gan na ddefnyddir y tagiau hynny ar gyfer geirffurfiau geiriadurol, ac mai CONJ yn unig a ddefnyddir gennym ar hyn o bryd yn hytrach na SCONJ a CCONJ. Gweler (http://universaldependencies.org) am fanylion pellach.

# Nodiadau

## Berfau Cryno

### Ffurfiau Presennol a Dyfodol y Ferf Gryno yn y Gymraeg
Un o nodweddion hynod y Gymraeg yw ei bod yn defnyddio'r un ffurfiau berfol ar gyfer yr amser presennol a'r amser dyfodol (cymharer 'fe ganaf gân' (='I will sing a song') a 'safaf yma o'ch blaen heddiw' (='I stand here before you today'). Er mai'r duedd yn ymarferol yw gwahaniaethu rhwng yr amseroedd hyn trwy ddefnyddio ffurfiau cwmpasog y ferf wrth gyfleu'r presennol ('rwy'n sefyll yma o'ch blaen heddiw'), rydym wedi cynnwys yr un ffurfiau a'r amser dyfodol cryno fel ffurfiau'r dyfodol er mwyn sicrhau bod y bwlch hwnnw yn y rhediad yn llawn.  

### Gwahanol ffurfiau Bod
Noder fod gan y ferf 'bod' amryw o ffurfiau sy'n rhannu'r un bwlch yn y rhediad, megis 'mae', 'oes' a 'sydd'. Lle'r oedd hynny'n bosib, rydym wedi gwahaniaethu rhyngddynt yn y maes Nodweddion.

### Cywair
Mae i'r Gymraeg wahanol gyweiriau, ac er i'r rheiny gael rhywfaint o gynrychioliad yn y data, mae'n werth cofio mai data o wirydd sillafu a gramadeg a geir yma a bod ffurfiau mwy tafodieithol a hynod lafar yn brin o fewn y cofnodion.

### Graddau Ansoddeiriau
Nid oedd Cysill yn rhedeg ansoddeiriau afreolaidd fel *da*, *cystal*, *gwell* felly nid yw'r ffurfiau hynny wedi'u cysylltu yn y data ar hyn o bryd.

# Haenu Tagiau
Un hynodrwydd sydd i Universal Dependencies yw y gall rhai o'r tagiau gael blaenoriaeth dros dagiau eraill perthnasol a'u disodli. Er enghraifft, pan fydd arddodiad fel 'gan' yn gweithredu fel cysylltair, fel cysylltair y caiff ei dagio o ddilyn Universal Dependencies. Digwydda'r un peth gyda rhagenwau a banodolion, a chyda'r tag ar gyfer berfau cynorthwyol a berfau. Yn y data, rydym wedi cadw at y rhannau ymadrodd gwaelodol.

# Gwaith Pellach
Mae hwn yn gasgliad gwerthfawr o eirfa'r iaith, a'n gobaith yw y bydd yn ddefnyddiol i sawl un ac mewn sawl ffordd. Fodd bynnag, mae iaith, a'r modd y caiff ei ddehongli, yn newid yn gyson, â'n bwriad felly fydd ychwanegu ato a'i ddiwygio. Croesawn unrhyw gyfraniadau neu awgrymiadau a fydd yn gwella'r adnodd hwn. 

# Cydnabyddiaeth a Chyfeirio
Er ein bod yn rhyddhau'r data hwn o dan drwydded CC0, gofynwn yn garedig i chi ystyried rhoi cydnabyddiaeth i'r gwaith hwn. Mae derbyn y fath gydnabyddiaeth yn ein cynorthwyo i ddenu rhagor o gyllid i'n galluogi i ddatblygu a rhannu adnoddau technoleg iaith Cymraeg.

# Diolchiadau
Ni fyddai'r adnodd hwn wedi bod yn bosib heb waith diflino ein rhagflaenwyr, yn eu plith Cathair O Dochartaigh, Dafydd Roberts, Nick Ellis, Bill Hicks a Menna Morgan.

----

### Troednodiadau

[^troednodyn]: Noder fodd bynnag i ni benderfynu peidio dilyn yn gaeth y defnydd o dagiau Universal Dependencies a wneir gan Dr Johannes Heinecke yn ei Gorpws Cystrawennol o'r Gymraeg. Lle'r oedd modd, cadwom at y tagiau a ddefnyddwyd ganddo (gan ddefnyddio 'SM' ar gyfer 'Mutation' yn hytrach na 'Soft', er enghraifft), ond penderfynom gadw at y dehongliad mwy ceidwadol a geir yng ngwaith ysgolheigion o'r 20fed ganrif fel Stephen J. Williams, Melville Richards a D. Simon Evans. Rhesymau pragmataidd oedd yn bennaf gyfrifol am hyn. Dyma'r model y mae'n ymddangos i ddata Cysill ei ddilyn o ran rhediadau berfol (ac nid rhediadau ysgolheigion mwy diweddar fel David Thorne a Peter Wynn Thomas). Yn ogystal, tra bo Heinecke yn trin berfenwau fel enwau (=nouns) bob tro, credwn fod galluogi gwahaniaethu rhwng defnydd berfol ac enwol o'r berfenw ar lefel y tag rhan ymadrodd yn bwysig. Bydd hynny'n galluogi i gynnyrch sy'n adeiladu ar ben allbwn tagwyr rhan ymadrodd (fel y meddalwedd parsio bwriad o fewn cynorthwydd peronol Macsen) ymddwyn fel y disgwylid iddo wneud. Gwahaniaeth arall bwriadol yw'r defnydd o'r tag PART ar gyfer yr 'yn' a geir yn 'rwyf yn canu'. Gwneir hyn yn rhannol er mwyn cadw AUX ar gyfer berfau cynorthwyol, gan drin 'yn' fel geiryn rhagferfol ar batrwm 'to' yn Saesneg (cf 'to jump'), ond cydnabyddwn fod cyfiawnhad dros drin yr 'yn' hwn fel AUX o ddilyn canllawiau Universal Dependencies oherwydd ei swyddogaeth fel gair sy'n cyfrannu gwybodaeth am amser y ferf gwmpasog (cymharer 'rwyf yn symud' a 'rwyf wedi symud'). Pwysleisiwn i ni ddilyn y trywydd hwn am resymau pragmataidd yn ymwneud â'r defnydd a ragwelir o'r data hwn mewn tasgau NLP ymarferol. Rydym yn cydnabod yn ddiolchgar flaengaredd ymchwil Dr Johannes Heinecke yn y maes hwn wrth ymwneud â chystrawen trafod amser, ond yn barnu i raddau ein bod yn defnyddio'r un arfau at fwriad ychydig yn wahanol. Ein gobaith o osod sylfaen amgen yma yw y bydd modd cyd-drafod a chydweithredu lle bo hynny'n briodol, gan gydnabod nad yr un yw nod pawb.

----

# The Bangor Welsh Lexicon

This is a comprehensive lexicon of Welsh forms, their corresponding lemmas (= base forms), their parts of speech and morphological features, freely released under the CC0 license in the hope that it will stimulate the development of Welsh language technologies.

The source of the data is the Welsh lexicon designed for use within Cysill, the popular Welsh spelling and grammar checker created at Bangor University. In releasing this resource, we have converted the data from a complex format designed to cope with the memory limitations of 90s computers to a fuller format that is more manageable and easier to read.

The file is organized with one wordform per line, along with the lemma, part of speech, and morphological features.

## Examples of the data

Here’s an example of the data:

```
alwad	galwad	NOUN	Gender=Fem,Masc|Mutation=SM
alwadau	galwad	NOUN	Mutation=SM|Number=Plur
galwad	galwad	NOUN	Gender=Fem,Masc
galwadau	galwad	NOUN	Number=Plur
ngalwad	galwad	NOUN	Gender=Fem,Masc|Mutation=NM
ngalwadau	galwad	NOUN	Mutation=NM|Number=Plur
Galway	Galway	PROPN	NameType=Geo
alwedig	galwedig	ADJ	Degree=Pos|Mutation=SM
galwedig	galwedig	ADJ	Degree=Pos
ngalwedig	galwedig	ADJ	Degree=Pos|Mutation=NM
```

## Tag details

As the set of part of speech tags used by Cysill are specific to that program's needs, the data has been converted to use part of speech tags and contemporary features based on that used by the Universal Dependencies international framework (http: // universaldependencies .org)1. The tags are summarized in X and the morphological features summarized in Y. The benefit of using these tags and features is that the data now uses a general, recognized set of tags and features that are independent of specific language and likely to be familiar to developers working on NLP within a multilingual environment.

## List of Tags and Morphological Features used

The Attributes used, sorted by tag for which each feature was used, are:

```
ADJ
  Degree
    Cmp
    Equ
    Pos
    Sup
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
  Numform
    Word
  Numtype
    Ord
  Position
    Prenom

ADP
  -
    -
  AdpType
    Prep
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    1
    2
    3
  Style
    Coll
    Form

ADV
  -
    -
  Mutation
    AM
    NM
    SM

AUX

CCONJ

CONJ
  -
    -
  Mutation
    AM
    SM

DET
  -
    -
  Definite
    Def
  Mutation
    AM
    HM
    NM
    SM
  PronType
    Art

INTJ
  -
    -

NOUN
  -
    -
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Coll
    Plur
    Sing

NUM
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Numform
    Word
  Numtype
    Card

PART
  -
    -
  PronType
    Neg

PRON
  -
    -
  Gender
    Fem
    Masc
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    1
    2
    3
  Polite
    Form
    Inf
  Poss
    Yes
  PronGender
    Masc
  PronType
    Dem
    Int
    Prs
    Rel
  Style
    Arch
    Coll
    Form

PROPN
  Mutation
    AM
    HM
    NM
    SM
  NameType
    Geo
    Prs

PUNCT

SCONJ

SYM

VERB
  -
    -
  Mood
    Imp
    Ind
    Sub
  Mutation
    AM
    HM
    NM
    SM
  Number
    Plur
    Sing
  Person
    0
    1
    2
    3
  Relative
    Rel
  Style
    Arch
    Coll
    Form
  Tense
    Fut
    Imp
    Past
    Pqp
    Pres

X
```
Note that the data does not contan examples of PUNCT, SYM and X as these are not used for lexical items. In addition, we curently use CONJ exclusively, rather than SCONJ and CCONJ.

# Notes
## Abstract Verbs

### Present and Future Forms of the Short Verb in Welsh
A distinctive feature of the Welsh language is that it uses the same verb forms for the present and future tense (compare 'fe ganaf gân' (= 'I will sing a song') and 'safaf yma o'ch blaen heddiw' (=' I stand here before you today '). Although the tendency in practice is to distinguish these tenses by using the periphrastic construction when conveying the present ('rwy'n sefyll yma o'ch blaen heddiw'), we have included the short form present tense as future forms to ensure that that gap in the conjugation is fully filled.
### Different forms of Bod
Note that the verb 'bod' has several forms that share the same space in the conjugation, such as 'mae', 'oes' and 'sydd'. Where possible, we have disambiguated these forms in the Attributes field.

### Register
The Welsh language has different registers, and although these have some representation in the data, it is worth remembering that the data here is from a spellchecker and grammar checker and that more dialectal and colloquial forms are rare within the records.

Adjectives: degree of comparison
Cysill does not conjugate irregular adjectives as ‘da’ (good), ‘cystal’ (as good), ‘gwell’ (better) so those forms are not currently linked in the data.

## Tag layers

One peculiarity of Universal Dependencies is that some of the tags can take precedence over, and replace other relevant tags. For example, when a prefix such as 'gan' (by) acts as a conjunction, it is tagged as a conjunction when following Universal Dependencies. The same thing happens with pronouns and determiners, and with the tag for auxiliary verbs and verbs. In the data, we have kept the underlying parts of speech.

## Further Work

This is a valuable collection of the vocabulary of the Welsh language, which we hope will be useful to many and in many ways. However, language, and the way it is interpreted, is constantly changing, so it is our intention to add to it and to revise it. We welcome any contributions or suggestions that will improve this resource.

## Acknowledging our work
While we are releasing this data under the CC0 licence, should you use this resource, we kindly ask you to consider acknowledging our work. Doing so helps us secure future funding to create more useful Welsh language technology resources to share.

## Acknowledgements
This resource would not have been possible without the tireless work of our predecessors, including Cathair O Dochartaigh, Dafydd Roberts, Nick Ellis, Bill Hicks and Menna Morgan.

### Footnotes
It should be noted, however, that we decided not to strictly follow the method used by Dr Johannes Heinecke in applying Universal Dependencies tags to the Welsh language as used in his Welsh Language Syntax Corpus. Where possible, we kept to the tags he used (using 'SM' for 'Mutation' rather than 'Soft', for example), but decided to stick to the more conservative interpretation of 20th century scholars such  as Stephen J. Williams, Melville Richards and D. Simon Evans. This was largely due to pragmatic reasons. This is the model that Cysill's data seems to follow in terms of verb conjugation (and not those of more recent scholars such as David Thorne and Peter Wynn Thomas). In addition, while Heinecke always treats verbnouns as nouns, we believe that enabling the distinction between verb and nominal use of the infinitive at the level of the part of speech tag is important. This will allow a product that builds on the output of part of speech taggers (such as the intent parsing software within the Macsen peripheral assistant) to behave as expected.  Another deliberate difference is the use of the PART tag for the 'yn' found in 'rwyf yn canu'. This is partly to preserve AUX for auxiliary verbs, treating 'yn' as a prepositional word in the 'to' pattern in English (cf 'to jump'), but we recognize that there is justification for treating this 'yn' as AUX when following Universal Dependencies guidelines because of its function as a word that contributes information about the tense of the surrounding verb (compare 'I am moving' and 'I have moved'). We stress that we pursued this approach for pragmatic reasons concerning the anticipated use of this data in practical NLP tasks. We gratefully acknowledge Dr Johannes Heinecke's research prowess in this area in dealing with the syntax of time discussion, but judge to some extent that we use the same tools for a slightly different purpose. Our hope of laying an alternative foundation here is that it will be possible to discuss and co-operate where appropriate, while recognizing that everyone's goal is not the same.
