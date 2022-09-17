import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"

import Home from "../Pages/Home";
import ContasPagar from "../Pages/ContasPagar";
import RegistrarMovimentacao from "../Pages/RegistrarMovimentacao";
import Categoria from "../Pages/Categoria";
import Objetivo from "../Pages/Objetivo";

const Drawer = createDrawerNavigator();

export default function Routes(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                name="Contas a Pagar"
                component={ContasPagar}
            />

            <Drawer.Screen
                name="Registrar Movimentações"
                component={RegistrarMovimentacao}
            />

            <Drawer.Screen
                name="Categorias"
                component={Categoria}
            />

            <Drawer.Screen
                name="Objetivos"
                component={Objetivo}
            />
        </Drawer.Navigator>
    )
}