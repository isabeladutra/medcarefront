package teste;

import java.lang.reflect.*;

public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> clazz = Class.forName("java.util.ArrayList");
        
        System.out.println("Nome da classe: " + clazz.getName());
        System.out.println("Modificadores: " + Modifier.toString(clazz.getModifiers()));
        
        System.out.println("\nMétodos:");
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method.getName());
        }
        
        System.out.println("\nCampos:");
        Field[] fields = clazz.getDeclaredFields();
        for (Field field : fields) {
            System.out.println(field.getName());
        }
    }
}

