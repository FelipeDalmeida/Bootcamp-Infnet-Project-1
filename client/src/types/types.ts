export type Paciente = {
        id?:number | string;
        Nome:string;
        Sobrenome:string;
        Idade:number | string;
        Sexo:string;
        Data_Nascimento:string;
        Data_Avaliacao:string
    }

    export type Hemograma = {
        Hemacias?: string | number;
        Hemoglobina?: string | number;
        Hematocritos?: string | number;
        Leucocitos?: string | number;
        VGM?: string | number;
        HGM?: string | number;
        CHGM?: string | number;
        RDW?: string | number;
        Plaquetas?: string | number;
    }

    export type Antropometrica = {
        Massa?: string | number;
        Estatura?: string | number;
        Comprimento_Pe?: string | number;
        Altura_Ombro?: string | number;
        Largura_Ombro?: string | number;
        Envergadura?: string | number;
        Altura_Quadril?: string | number;
        Largura_Quadril?: string | number;
        Altura_Joelho?: string | number;
        Altura_Tornozelo?: string | number;
    }
    
    export type CompCorp = {
        Massa?: string | number;
        IMC?: string | number;
        Gordura_Corporal?: string | number;
        Gordura_Visceral?: string | number;
        Metabolismo_Basal?: string | number;
        Musculos_Esqueleticos?: string | number;
        Idade_Corporal?: string | number;
    
    }