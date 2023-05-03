package com.example.PPR;
import java.sql.*;

public class Conexao{

    public static String URL = "jdbc:mysql://localhost:4407/icaro";
    public static String login = "root";
    public static String senha = "new_sql";
    private static Conexao conexao;
    
    private Conexao(){}
    
    public static Conexao getConexao(){
        if (conexao == null){
            return new Conexao();
        }
        else{
            return conexao;
        }
    }
    public ResultSet query(String query){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexao = DriverManager.getConnection(URL, login, senha);
            PreparedStatement preparo = conexao.prepareStatement(query);
            ResultSet resultado = preparo.executeQuery();
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;  
    }

}